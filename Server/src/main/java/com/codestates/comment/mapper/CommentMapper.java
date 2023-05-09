package com.codestates.comment.mapper;

import com.codestates.answer.entity.Answer;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment commentPostDtoToComment(CommentPostDto commentPostDto) {
        Comment comment = new Comment();
        Answer answer = new Answer();
        Member member = new Member();

        answer.setMember(member);
        answer.setAnswerId(commentPostDto.getAnswerId());

        comment.setContent(commentPostDto.getContent());
        comment.setAnswer(answer);
        comment.setMember(member);

        return comment;
    }

    default Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto){
        Comment comment = new Comment();
        comment.setCommentId(commentPatchDto.getCommentId());
        comment.setContent(commentPatchDto.getContent());

        return comment;
    }

    default CommentResponseDto commentToCommentResponseDto(Comment comment) {
        CommentResponseDto commentResponseDto = new CommentResponseDto();

        commentResponseDto.setCommentId(comment.getCommentId());
        commentResponseDto.setAnswerId(comment.getAnswer().getAnswerId());
        commentResponseDto.setMemberId(comment.getMember().getMemberId());
        commentResponseDto.setContent(comment.getContent());
        commentResponseDto.setCreatedAt(comment.getCreatedAt());
        commentResponseDto.setModifiedAt(comment.getModifiedAt());

        return commentResponseDto;
    }

    default List<CommentResponseDto> commentsToCommentResponseDtos(List<Comment> comments) {
        return comments.stream()
                .map(comment -> commentToCommentResponseDto(comment))
                .collect(Collectors.toList());
    }
}
