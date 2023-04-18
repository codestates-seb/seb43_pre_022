package com.codestates.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerResponseDto {
    private long memberId;
    private long questionId;
    private long answerId;

    private String content;
}
