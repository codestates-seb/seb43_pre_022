package com.codestates.answer.service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.comment.service.CommentService;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final CommentService commentService;
    public AnswerService(AnswerRepository answerRepository, CommentService commentService) {
        this.answerRepository = answerRepository;
        this.commentService = commentService;
    }

    public Answer createAnswer(Answer answer) {
        Long memberIdFromToken = getMemberIdFromToken();
        answer.getMember().setMemberId(memberIdFromToken);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Long memberIdFromToken = getMemberIdFromToken();

        if(findAnswer.getMember().getMemberId() != memberIdFromToken) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ANSWER);
        }

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    
    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        Long memberIdFromToken = getMemberIdFromToken();

        if(findAnswer.getMember().getMemberId() != memberIdFromToken) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_DELETE_ANSWER);
        }

        answerRepository.delete(findAnswer);
    }


    //이거 questionService에서 findQuestion(겟 쿠에스천)에서 사용, 여기 안에서 앤서들에 커맨츠 세팅됨
    //questionService의 findVerifiedQuestion에서 쿠에스천에 앤서스 세팅한 후 findQuestion을 겟 핸들링애 매칭
    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }


    public Answer findVerifiedAnswer(long answerId) { 
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));


        //AnswerResponseDto의 comment를 채워야해서 만든 코드
        List<Comment> comments = commentService.findComments(findAnswer.getAnswerId());
        findAnswer.setComments(comments);

        return findAnswer;
    }

    //이친구는 쿠에스천 서비스에서 List<answer> 채울려고 만든 매서드
    //List<answer>은 나중에 번호만 따서 다시 넣어줄거고, 컨트롤러에선 사용안해
    public List<Answer> findAnswers(long questionId) {
        return answerRepository.findByQuestion_QuestionId(questionId);
    }

    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }

    private Long getMemberIdFromToken() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        //principal 헤더가 비어있을 수 있음 (로그인 안된 상태)
        if(!(principal instanceof  Map)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_LOGIN);
        }

        Map findPrincipal = (Map) principal;
        Long memberId = (Long) findPrincipal.get("memberId");

        return memberId;
    }
}
