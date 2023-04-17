package com.codestates.question.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    public QuestionService(QuestionRepository questionRepository, MemberService memberService) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
    }

    // TODO 서비스 클래스 내부의 find를 제외한 메서드는 로그인이 되어 있어야 함.

    public Question createQuestion(Question question) {
        // 로그인이 되어 있나 체크
        // 일단 임시방편으로 해당 회원이 존재하는지 체크하는 것으로 대체해놨음
        memberService.findMember(question.getMember().getMemberId());

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        // 현재 고려해야 하는 필드 - id, title content

        Question findQuestion = findQuestion(question.getQuestionId());
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question question = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));
    }

    public void deleteQuestion(long questionId) {
        questionRepository.deleteById(questionId);
    }

    public void deleteAllQuestion() {
        questionRepository.deleteAll();
    }
}
