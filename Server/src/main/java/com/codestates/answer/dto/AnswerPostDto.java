package com.codestates.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPostDto {

    @Positive
    private long questionId;


    @NotBlank(message = "답변에는 내용이 있어야 합니다.")
    private String content;

}
