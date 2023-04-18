package com.codestates.answer.mapper;


import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        Question question = new Question();
        Member member = new Member();

        question.setQuestionId(answerPostDto.getQuestionId());
        member.setMemberId(answerPostDto.getMemberId());

        answer.setContent(answer.getContent());
        answer.setMember(member);
        answer.setQuestion(question);

        return answer;
    }
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setAnswerId(answer.getAnswerId());

        return answerResponseDto;
    }

}
