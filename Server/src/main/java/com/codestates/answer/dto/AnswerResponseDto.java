package com.codestates.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
    private long memberId;
    private long questionId;
    private long answerId;

    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private boolean selected;

    private List<Long> commentIds;
}
