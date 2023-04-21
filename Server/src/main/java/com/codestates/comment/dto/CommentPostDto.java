package com.codestates.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class CommentPostDto {

//    아래 로직이 필요업는이유가, Pathvariable로 받아와서 생성되는 커멘트에 매핑해줌
//    @Positive
//    private long answerId;

    @NotBlank(message = "댓글에는 내용이 있어야 합니다")
    private String content;

}
