package com.codestates.comment.controller;


import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import com.codestates.dto.SingleResponseDto;
import com.codestates.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@Validated
@RequestMapping("/api") //어차피 개별 질문 조회에 들어가있으니 여기가 디폴트 될것같은데..
public class CommentController {
    private final static String COMMENT_DEFAULT_URL = "/api";
    private final CommentService commentService;
    private final CommentMapper commentMapper;

    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping("/answers/{answer-id}/comments")
    public ResponseEntity postComment(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody CommentPostDto commentPostDto) {
        Comment comment = commentService.createComment(commentMapper.commentPostDtoToComment(answerId, commentPostDto));

        URI location = UriCreator.createUri(COMMENT_DEFAULT_URL, comment.getCommentId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/comments/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentPatchDto commentPatchDto) {
        commentPatchDto.setCommentId(commentId);
        Comment comment = commentService.updateComment(commentMapper.commentPatchDtoToComment(commentPatchDto));

        CommentResponseDto response = commentMapper.commentToCommentResponseDto(comment);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/comments/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
