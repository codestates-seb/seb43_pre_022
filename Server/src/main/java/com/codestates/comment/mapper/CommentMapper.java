package com.codestates.comment.mapper;

import com.codestates.answer.entity.Answer;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment commentPostDtoToComment(long answerId, CommentPostDto commentPostDto) {
        Comment comment = new Comment();
        Member member = new Member();
        Answer answer = new Answer();

        answer.setAnswerId(answerId);
        member.setMemberId(commentPostDto.getMemberId());

        comment.setContent(commentPostDto.getContent());
        comment.setMember(member);
        comment.setAnswer(answer);

        return comment;
    }
    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);
    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
