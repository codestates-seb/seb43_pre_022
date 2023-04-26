//package com.codestates.answer;
//
//import com.codestates.answer.dto.AnswerPatchDto;
//import com.codestates.answer.dto.AnswerPostDto;
//import com.codestates.answer.entity.Answer;
//import com.codestates.answer.mapper.AnswerMapper;
//import com.codestates.answer.service.AnswerService;
//import com.google.gson.Gson;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDateTime;
//
//import static org.hamcrest.Matchers.is;
//import static org.hamcrest.Matchers.startsWith;
//import static org.mockito.BDDMockito.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@Transactional
//@SpringBootTest
//@AutoConfigureMockMvc
//public class AnswerControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    @MockBean
//    private AnswerService answerService;
//
//    @Autowired
//    private AnswerMapper answerMapper;
//
//    //answer 테스트 전에 미리 앤서 만들어놓기
//    private AnswerPostDto beforeAnswerPost;
//    private String beforeAnswerContent;
//    private Answer answer;
//
//    @BeforeEach
//    public void init() {
//        beforeAnswerPost = new AnswerPostDto(1L,"나는 손흥민이라고 생각하는데"); //questionId, content
//        answer = answerMapper.answerPostDtoToAnswer(beforeAnswerPost);
//        answer.setAnswerId(1L); //answerId : 1
//        answer.getMember().setMemberId(1L); //memberId : 1
//        answer.setCreatedAt(LocalDateTime.now());
//        answer.setModifiedAt(LocalDateTime.now());
//        answer.setSelected(false);
//        beforeAnswerContent = gson.toJson(beforeAnswerPost);
//    }
//
//    @Test
//    void postAnswerTest() throws Exception{
//        //given
//        given(answerService.createAnswer(Mockito.any(Answer.class)))
//                .willReturn(answer);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        post("/api/answers")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(beforeAnswerContent)
//                );
//
//        //then answerPost시 상태는 create고, url의 위치는 다음과 같을것
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(header().string("location", is(startsWith("/api/answers/"))));
//    }
//
//    @Test
//    void patchAnswerTest() throws Exception{
//        //given (답변 등록하기, 등록된 답변의 내용 변경)
//
//        given(answerService.createAnswer(Mockito.any(Answer.class)))
//                .willReturn(answer);
//
//        ResultActions beforePostActions =
//                mockMvc.perform(
//                        post("/api/answers")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(beforeAnswerContent)
//                );
//        //여기까지 postAnswer
//
//
//        long answerId;
//        String location = beforePostActions.andReturn().getResponse().getHeader("location"); // "/api/answers/1"
//        answerId = Long.parseLong(location.substring(location.lastIndexOf("/") + 1)); // /api/answers/1 에서 1만 떼옴
//        //가져온 answerId로 patch객체 생성
//        AnswerPatchDto patch = new AnswerPatchDto(answerId, "내용 바꿨다!");
//        String patchContent = gson.toJson(patch);
//
//        answer.setContent(patch.getContent());
//        given(answerService.updateAnswer(Mockito.any(Answer.class)))
//                .willReturn(answer);
//
//
//        //when (변경된 해당 patchContent로 patchAnswer() 매서드 실행)
//        ResultActions patchAction = mockMvc.perform(
//                patch(location)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(patchContent)
//        );
//
//
//
//        //then 답변의 수정한 내용은 바뀌었을것.
//
//        patchAction
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.content").value(patch.getContent()));
//    }
//
//    @Test
//    void getAnswerTest() throws Exception {
//        //given 먼저 답변 post
//        given(answerService.createAnswer(Mockito.any(Answer.class)))
//                .willReturn(answer);
//
//        ResultActions beforePostAction =
//                mockMvc.perform(
//                        post("/api/answers")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(beforeAnswerContent)
//                );
//
//        String location = beforePostAction.andReturn().getResponse().getHeader("location");// "api/answers/1"
//
//
//        //when then 등록한거 꺼내와서 맞는지
//        given(answerService.findAnswer(1L))
//                .willReturn(answer);
//    }
//
//
//}
