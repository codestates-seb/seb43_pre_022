package com.codestates.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {

//    아래 로직이 필요업는이유가, Pathvariable로 받아와서 생성되는 앤서에 매핑해줌
//    @Positive
//    private long questionId;


    @NotBlank(message = "답변에는 내용이 있어야 합니다.")
    private String content;

}
