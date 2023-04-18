package com.codestates.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class CommentPostDto {
    @Positive
    private long memberId;

    @Positive
    private long answerId;

    @NotBlank(message = "댓글에는 내용이 있어야 합니다")
    private String content;

}
