package com.codestates.question.dto;

import com.codestates.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

public class QuestionResponseDto {
    @Getter
    @Setter
    public static class Answers {
        private long questionId;

        private long memberId;

        private String title;

        private String content;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        private List<Answer> answers;
    }

    @Getter
    @Setter
    public static class AnswerIds {
        private long questionId;

        private long memberId;

        private String title;

        private String content;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        private List<Long> answerIds;
    }

}
