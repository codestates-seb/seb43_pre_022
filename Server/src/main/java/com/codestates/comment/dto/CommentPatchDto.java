package com.codestates.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
public class CommentPatchDto {
    @Positive
    private long commentId;

    @NotBlank(message = "댓글에는 내용이 있어야 합니다")
    private String content;
}
