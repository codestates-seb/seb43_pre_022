package com.codestates.comment.mapper;

import com.codestates.answer.entity.Answer;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment commentPostDtoToComment(long answerId, CommentPostDto commentPostDto) {
        Comment comment = new Comment();
        Answer answer = new Answer();
        Member member = new Member();

        answer.setMember(member);
        answer.setAnswerId(answerId);

        comment.setContent(commentPostDto.getContent());
        comment.setAnswer(answer);
        comment.setMember(member);

        return comment;
    }

    default Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto){
        Comment comment = new Comment();
        comment.setCommentId(commentPatchDto.getCommentId());
        comment.setContent(commentPatchDto.getContent());
        comment.setModifiedAt(LocalDateTime.now());

        return comment;
    }
    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
