package com.codestates.answer.mapper;


import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import org.mapstruct.Mapper;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(long questionId, AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        Question question = new Question();
        Member member = new Member();

        question.setQuestionId(questionId);
        question.setMember(member);

        answer.setContent(answerPostDto.getContent());
        answer.setQuestion(question);
        answer.setMember(member);

        return answer;
    }
    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto){
        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setMemberId(answer.getMember().getMemberId());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());

        List<Comment> comments = answer.getComments();
        List<Long> commentIds = comments.stream()
                .map(comment -> comment.getCommentId())
                .collect(Collectors.toList());
        answerResponseDto.setCommentIds(commentIds);
        return answerResponseDto;
    }

    default List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers) {
        return answers.stream()
                .map(answer -> answerToAnswerResponseDto(answer))
                .collect(Collectors.toList());
    }
}
