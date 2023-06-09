package com.codestates.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {
    private long commentId;
    private long answerId;
    private long memberId;

    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
