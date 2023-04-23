package com.codestates.comment.service;

import com.codestates.answer.repository.AnswerRepository;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }
    public Comment createComment(Comment comment) {
        Long memberIdFromToken = getMemberIdFromToken();
        comment.getMember().setMemberId(memberIdFromToken);
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findVerifiedComment(comment.getCommentId());
        Long memberIdFromToken = getMemberIdFromToken();

        if(findComment.getMember().getMemberId() != memberIdFromToken) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_COMMENT);
        }

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        findComment.setModifiedAt(LocalDateTime.now());

        return commentRepository.save(findComment);
    }

    public void deleteComment(long commentId) {
        Comment findComment = findVerifiedComment(commentId);
        Long memberIdFromToken = getMemberIdFromToken();
        if(findComment.getMember().getMemberId() != memberIdFromToken) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_DELETE_COMMENT);
        }

        commentRepository.delete(findComment);
    }

    public List findComments(long answerId) {
        return commentRepository.findByAnswer_AnswerId(answerId);
    }

    public Comment findComment(long commentId) {
        return findVerifiedComment(commentId);
    }


    private Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findComment;
    }

    private Long getMemberIdFromToken() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        //principal 헤더가 비어있을 수 있음 (로그인 안된 상태)
        if(!(principal instanceof Map)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_LOGIN);
        }

        Map findPrincipal = (Map) principal;
        Long memberId = (Long) findPrincipal.get("memberId");

        return memberId;
    }
}
