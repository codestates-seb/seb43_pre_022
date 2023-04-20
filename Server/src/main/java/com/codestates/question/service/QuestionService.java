package com.codestates.question.service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.service.AnswerService;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    private final AnswerService answerService;

    public QuestionService(QuestionRepository questionRepository, MemberService memberService, AnswerService answerService) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
        this.answerService = answerService;
    }
    // TODO 서비스 클래스 내부의 find를 제외한 메서드는 로그인이 되어 있어야 함.

    public Question createQuestion(Question question) {
        Long memberId = getMemberIdFromToken();

        question.getMember().setMemberId(memberId);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {

        Question findQuestion = findQuestion(question.getQuestionId());
        Long memberIdFromToken = getMemberIdFromToken();

        // 작성자가 본인이 맞는지 확인하는 코드
        if(findQuestion.getMember().getMemberId() != memberIdFromToken) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_QUESTION);
        }

        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
        findQuestion.setModifiedAt(LocalDateTime.now());

        List<Answer> answers = answerService.findAnswers(findQuestion.getQuestionId());
        findQuestion.setAnswers(answers);

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        List<Answer> answers = answerService.findAnswers(questionId);
        for(Answer answer : answers) {
            answerService.findAnswer(answer.getAnswerId());
        }
        return findVerifiedQuestion(questionId);

    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question question = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        /**
         * response에 List<answer> 필드를 채우기 위한 코드
         * 위의 updateQuestion과 findQuestion 메서드에도 적용됨
         */
        List<Answer> answers = answerService.findAnswers(question.getQuestionId());
        question.setAnswers(answers);

        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));

        List<Question> questions = questionPage.getContent();

        // 나중에 stream 코드로 변경하기
        for (Question question : questions) {
            List<Answer> answers = answerService.findAnswers(question.getQuestionId());
            question.setAnswers(answers);
        }

        return questionPage;
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findQuestion(questionId);
        Long memberIdFromToken = getMemberIdFromToken();

        if (findQuestion.getMember().getMemberId() != memberIdFromToken) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_DELETE_QUESTION);
        }

        questionRepository.deleteById(questionId);
    }

    public void deleteAllQuestion() {
        // TODO admin이 아니면 exception 발생시키는 코드 추가해야함.

        questionRepository.deleteAll();
    }

    private Long getMemberIdFromToken() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(!(principal instanceof Map)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_LOGIN);
        }

        Map findPrincipal = (Map) principal;
        Long memberId = (Long) findPrincipal.get("memberId");

        return memberId;
    }
}
