package com.codestates.answer.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPatchDto {
    @Positive
    private long answerId;

    @NotBlank(message = "답변에는 내용이 있어야 합니다.")
    private String content;

    @NotBlank
    private boolean selected;
}
