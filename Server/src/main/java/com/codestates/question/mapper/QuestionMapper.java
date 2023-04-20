package com.codestates.question.mapper;

import com.codestates.answer.entity.Answer;
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

//    default QuestionResponseDto.Answers questionToQuestionResponseDto(Question question) {
//
//        QuestionResponseDto.Answers questionResponseDto = new QuestionResponseDto.Answers();
//
//        questionResponseDto.setQuestionId(question.getQuestionId());
//        questionResponseDto.setMemberId(question.getMember().getMemberId());
//        questionResponseDto.setTitle(question.getTitle());
//        questionResponseDto.setContent(question.getContent());
//        questionResponseDto.setCreatedAt(question.getCreatedAt());
//        questionResponseDto.setModifiedAt(question.getModifiedAt());
//        questionResponseDto.setAnswers(question.getAnswers());
//
//        return questionResponseDto;
//    }

//    default List<QuestionResponseDto.Answers> questionsToQuestionResponseDtos(List<Question> questions) {
//        return questions.stream()
//                .map(question -> questionToQuestionResponseDto(question))
//                .collect(Collectors.toList());
//    }

    default QuestionResponseDto.AnswerIds questionToQuestionResponseDto(Question question) {
        QuestionResponseDto.AnswerIds questionResponseDto = new QuestionResponseDto.AnswerIds();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setMemberId(question.getMember().getMemberId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());

        List<Answer> answers = question.getAnswers();
        List<Long> answerIds = answers.stream()
                .map(answer -> answer.getAnswerId())
                .collect(Collectors.toList());
        questionResponseDto.setAnswerIds(answerIds);

        return questionResponseDto;
    }

    default List<QuestionResponseDto.AnswerIds> questionsToQuestionResponseDtos(List<Question> questions) {
        return questions.stream()
                .map(question -> questionToQuestionResponseDto(question))
                .collect(Collectors.toList());
    }
}
