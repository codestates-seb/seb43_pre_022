package com.codestates.answer.dto;


import lombok.*;

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

    private boolean selected;
}
