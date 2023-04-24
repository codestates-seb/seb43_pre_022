package com.codestates.answer;

import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import com.google.gson.Gson;
import org.junit.jupiter.api.BeforeEach;
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

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.*;
import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.head;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@SpringBootTest
@AutoConfigureMockMvc
public class AnswerControllerTest {
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private Gson gson;

    @MockBean
    private AnswerService answerService;

    @Autowired
    private AnswerMapper answerMapper;

    //answer 테스트 전에 미리 앤서 만들어놓기
    private AnswerPostDto beforeAnswer;
    private String beforeAnswerContent;
    private Answer answer;

    @BeforeEach
    public void init() {
        beforeAnswer = new AnswerPostDto(1L,"나는 손흥민이라고 생각하는데");
        answer = answerMapper.answerPostDtoToAnswer(beforeAnswer); //questionId : 1
        answer.setAnswerId(1L); //answerId : 1
        beforeAnswerContent = gson.toJson(beforeAnswer);
    }

    @Test
    void postAnswerTest() throws Exception{
        //given
        given(answerService.createAnswer(Mockito.any(Answer.class)))
                .willReturn(answer);

        //when
        ResultActions actions =
                mockMvc.perform(
                        post("/api/answers")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(beforeAnswerContent)
                );

        //then
        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("location", is(startsWith("/api/answers/"))));
    }
    
    @Test
    void patchAnswerTest() throws Exception{
        //given (답변 등록하기, 등록된 답변의 내용 변경)

        ResultActions beforePostActions =
                mockMvc.perform(
                        post("/api/answers")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(beforeAnswerContent)
                );

        long answerId;
        String location = beforePostActions.andReturn().getResponse().getHeader("location"); // "/api/answers/1"
        answerId = Long.parseLong(location.substring(location.lastIndexOf("/") + 1)); // /api/answers/1 에서 1만 떼옴
        //가져온 answerId로 patch객체 생성
        AnswerPatchDto patch = new AnswerPatchDto(answerId, "내용 바꿨다!");
        String patchContent = gson.toJson(patch);


//        //when (변경된 해당 patchContent로 patchAnswer 실행)
//        mockMvc.perform(
//                patch(location)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .conten
//        )

        //then
    }


}
