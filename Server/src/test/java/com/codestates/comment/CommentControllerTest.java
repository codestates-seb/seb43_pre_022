package com.codestates.comment;

import com.codestates.answer.entity.Answer;
import com.codestates.comment.dto.CommentPatchDto;
import com.codestates.comment.dto.CommentPostDto;
import com.codestates.comment.dto.CommentResponseDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import com.codestates.member.entity.Member;
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

import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class CommentControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private CommentService commentService;

    @MockBean
    @Autowired
    private CommentMapper commentMapper;


    @Test
    void postCommentTest() throws Exception {
        //given

        Comment comment = new Comment();
        comment.setAnswer(new Answer());
        comment.getAnswer().setAnswerId(1L);
        comment.setContent("메롱");

        CommentPostDto post = new CommentPostDto(comment.getAnswer().getAnswerId(), comment.getContent());
        String postContent = gson.toJson(post);

        when(commentMapper.commentPostDtoToComment(any(CommentPostDto.class)))
                .thenReturn(new Comment());

        given(commentService.createComment(Mockito.any(Comment.class)))
                .willReturn(comment);




        //when
        ResultActions postAction = mockMvc.perform(
                post("/api/comments")
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
    void patchCommentTest() throws Exception {

        //given
        CommentPatchDto patch = new CommentPatchDto(1L, "메롱");
        CommentResponseDto response =
                new CommentResponseDto(1L, 1L, 1L,
                        "메롱", LocalDateTime.now(), LocalDateTime.now());

        given(commentMapper.commentPatchDtoToComment(Mockito.any(CommentPatchDto.class)))
                .willReturn(new Comment());

        given(commentService.updateComment(Mockito.any(Comment.class)))
                .willReturn(new Comment());

        given(commentMapper.commentToCommentResponseDto(Mockito.any(Comment.class)))
                .willReturn(response);

        String responseContent = gson.toJson(patch);

        URI uri = UriCreator.createUri("/api/comments/", 1L);

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
                .andExpect((jsonPath("$.data.content").value(response.getContent())));
    }

    @Test
    void getCommentTest() throws Exception {

        //given
        Comment comment = new Comment(1L, "메롱", new Answer(), new Member(),
                LocalDateTime.now(), LocalDateTime.now());
        comment.getMember().setMemberId(1L);
        comment.getAnswer().setAnswerId(1L);

        CommentResponseDto response =
                new CommentResponseDto(1L, 1L, 1L,
                        "메롱", LocalDateTime.now(), LocalDateTime.now());

        given(commentService.findComment(Mockito.anyLong()))
                .willReturn(new Comment());

        given(commentMapper.commentToCommentResponseDto(Mockito.any(Comment.class)))
                .willReturn(response);
        //when
        String responseContent = gson.toJson(response);
        ResultActions getAction = mockMvc.perform(
                get("/api/comments/" + response.getCommentId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(responseContent)
        );

        //then
        getAction.andExpect(status().isOk())
                .andExpect((jsonPath("$.data.memberId").value(comment.getMember().getMemberId())))
                .andExpect((jsonPath("$.data.answerId").value(comment.getAnswer().getAnswerId())))
                .andExpect((jsonPath("$.data.commentId").value(comment.getCommentId())))
                .andExpect((jsonPath("$.data.content").value(comment.getContent())));

    }

    @Test
    void getAnswersTest() throws Exception {
        //given
        Comment comment1 = new Comment(1L, "메롱1", new Answer(), new Member(),
                LocalDateTime.now(), LocalDateTime.now());
        comment1.getMember().setMemberId(1L);
        comment1.getAnswer().setAnswerId(1L);

        Comment comment2 = new Comment(2L, "메롱2", new Answer(), new Member(),
                LocalDateTime.now(), LocalDateTime.now());
        comment2.getMember().setMemberId(1L);
        comment2.getAnswer().setAnswerId(1L);


        List<CommentResponseDto> responses = List.of(new CommentResponseDto(1L, 1L, 1L,
                        "메롱1", LocalDateTime.now(), LocalDateTime.now()),
                new CommentResponseDto(2L, 1L, 1L,
                        "메롱2", LocalDateTime.now(), LocalDateTime.now()));

        given(commentService.findComments(Mockito.anyLong())).willReturn(new ArrayList<Comment>());
        given(commentMapper.commentsToCommentResponseDtos(Mockito.any(List.class))).willReturn(responses);

        //when
        ResultActions getsAction = mockMvc.perform(
                get("/api/comments")
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
        long commentId = 1L;
        doNothing().when(commentService).deleteComment(Mockito.anyLong());

        //when
        ResultActions deleteAction = mockMvc.perform(
                delete("/api/comments/" + commentId)
                        .accept(MediaType.APPLICATION_JSON)
        );

        //then
        deleteAction.andExpect(status().isNoContent());
    }
}
