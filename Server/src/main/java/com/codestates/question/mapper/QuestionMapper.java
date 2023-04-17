package com.codestates.question.mapper;

import com.codestates.member.entity.Member;
import com.codestates.question.dto.QuestionPatchDto;
import com.codestates.question.dto.QuestionPostDto;
import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        Member member = new Member();

        member.setMemberId(questionPostDto.getMemberId());

        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setMember(member);

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Question question = new Question();

        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setMemberId(question.getMember().getMemberId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());

        return questionResponseDto;
    }

    default List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        return questions.stream()
                .map(question -> questionToQuestionResponseDto(question))
                .collect(Collectors.toList());
    }
}
