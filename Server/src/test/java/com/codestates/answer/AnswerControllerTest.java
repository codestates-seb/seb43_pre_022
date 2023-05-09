package com.codestates.answer;

import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import com.codestates.utils.UriCreator;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class AnswerControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private AnswerService answerService;

    @MockBean
    @Autowired
    private AnswerMapper answerMapper;


    @Test
    void postAnswerTest() throws Exception {
        //given

        Answer answer = new Answer();
        answer.setAnswerId(1L);
        answer.setContent("메롱");

        AnswerPostDto post = new AnswerPostDto(answer.getAnswerId(), answer.getContent());
        String postContent = gson.toJson(post);

        when(answerMapper.answerPostDtoToAnswer(any(AnswerPostDto.class)))
                .thenReturn(new Answer());

        given(answerService.createAnswer(Mockito.any(Answer.class)))
                .willReturn(answer);




        //when
        ResultActions postAction = mockMvc.perform(
                post("/api/answers")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(postContent)
        );

        //then
        postAction
                .andExpect(status().isCreated());
                //.andExpect(header().string("location", is(startsWith("/api/answers"))))
    }


    @Test
    void patchAnswerTest() throws Exception {

        //given
        AnswerPatchDto patch = new AnswerPatchDto(1L, "메롱", false);
        AnswerResponseDto response =
                new AnswerResponseDto(1L, 1L, 1L,
                        "메롱", LocalDateTime.now(), LocalDateTime.now(), false, new ArrayList<>());

        given(answerMapper.answerPatchDtoToAnswer(Mockito.any(AnswerPatchDto.class)))
                .willReturn(new Answer());

        given(answerService.updateAnswer(Mockito.any(Answer.class)))
                .willReturn(new Answer());

        given(answerMapper.answerToAnswerResponseDto(Mockito.any(Answer.class)))
                .willReturn(response);

        String responseContent = gson.toJson(patch);

        URI uri = UriCreator.createUri("/api/answers/", 1L);

        //when
        ResultActions patchAction = mockMvc.perform(
                patch(uri)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(responseContent)
        );

        //then
        patchAction
                .andExpect(status().isOk())
                .andExpect((jsonPath("$.data.content").value(response.getContent())))
                .andExpect(jsonPath("$.data.selected").value(response.isSelected()));
    }

    @Test
    void getAnswerTest() throws Exception {

        //given
        Answer answer = new Answer(1L, "메롱", LocalDateTime.now(), LocalDateTime.now(),
                false, new Member(), new Question(), new ArrayList<>());
        answer.getMember().setMemberId(1L);
        answer.getQuestion().setQuestionId(1L);

        AnswerResponseDto response =
                new AnswerResponseDto(1L, 1L, 1L,
                        "메롱", LocalDateTime.now(), LocalDateTime.now(), false, new ArrayList<>());

        given(answerService.findAnswer(Mockito.anyLong()))
                .willReturn(new Answer());

        given(answerMapper.answerToAnswerResponseDto(Mockito.any(Answer.class)))
                .willReturn(response);
        //when
        String responseContent = gson.toJson(response);
        ResultActions getAction = mockMvc.perform(
                get("/api/answers/" + response.getAnswerId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(responseContent)
        );

        //then
        getAction.andExpect(status().isOk())
                .andExpect((jsonPath("$.data.memberId").value(answer.getMember().getMemberId())))
                .andExpect((jsonPath("$.data.questionId").value(answer.getQuestion().getQuestionId())))
                .andExpect((jsonPath("$.data.answerId").value(answer.getAnswerId())))
                .andExpect((jsonPath("$.data.content").value(answer.getContent())))
                .andExpect((jsonPath("$.data.selected").value(answer.isSelected())));

    }

    @Test
    void getAnswersTest() throws Exception {
        //given
        Answer answer1 = new Answer(1L, "메롱1", LocalDateTime.now(), LocalDateTime.now(),
                false, new Member(), new Question(), new ArrayList<>());
        answer1.getMember().setMemberId(1L);
        answer1.getQuestion().setQuestionId(1L);

        Answer answer2 = new Answer(2L, "메롱2", LocalDateTime.now(), LocalDateTime.now(),
                false, new Member(), new Question(), new ArrayList<>());
        answer2.getMember().setMemberId(2L);
        answer2.getQuestion().setQuestionId(1L);

        List<AnswerResponseDto> responses = List.of(new AnswerResponseDto(1L, 1L, 1L,
                        "메롱1", LocalDateTime.now(), LocalDateTime.now(), false, new ArrayList<>()),
                new AnswerResponseDto(2L, 1L, 1L,
                        "메롱2", LocalDateTime.now(), LocalDateTime.now(), false, new ArrayList<>()));

        given(answerService.findAnswers(Mockito.anyLong())).willReturn(new ArrayList<Answer>());
        given(answerMapper.answersToAnswerResponseDtos(Mockito.any(List.class))).willReturn(responses);

        //when
        ResultActions getsAction = mockMvc.perform(
                get("/api/answers")
                        .accept(MediaType.APPLICATION_JSON)
        );


        //then
        getsAction
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data").isArray())
                .andReturn();

    }

    @Test
    void deleteAnswerTest() throws Exception {

        //given
        long answerId = 1L;
        doNothing().when(answerService).deleteAnswer(Mockito.anyLong());

        //when
        ResultActions deleteAction = mockMvc.perform(
                delete("/api/answers/" + answerId)
                        .accept(MediaType.APPLICATION_JSON)
        );

        //then
        deleteAction.andExpect(status().isNoContent());
    }

}
