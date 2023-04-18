package com.codestates.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private long commentId;
    private long answerId;
    private long memberId;

    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
