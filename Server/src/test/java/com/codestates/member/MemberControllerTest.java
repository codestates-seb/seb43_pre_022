//package com.codestates.member;
//
//import com.codestates.member.dto.MemberPatchDto;
//import com.codestates.member.dto.MemberPostDto;
//import com.codestates.member.dto.MemberProfileDto;
//import com.codestates.member.dto.MemberResponseDto;
//import com.codestates.member.entity.Member;
//import com.codestates.member.mapper.MemberMapper;
//import com.codestates.member.service.MemberService;
//import com.google.gson.Gson;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.transaction.annotation.Transactional;
//
//import static org.hamcrest.Matchers.is;
//import static org.hamcrest.Matchers.startsWith;
//import static org.mockito.BDDMockito.given;
//import static org.mockito.Mockito.doNothing;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@SpringBootTest
//@AutoConfigureMockMvc
//public class MemberControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    // (1)
//    @MockBean
//    private MemberService memberService;
//
//    // (2)
//    @Autowired
//    private MemberMapper mapper;
//
//    @Test
//    void postMemberTest() throws Exception {
//        //given
//        MemberPostDto post = new MemberPostDto("홍길동", "gildong@gmail.com", "12341234");
//        Member member = mapper.memberPostDtoToMember(post);
//        member.setMemberId(1L);
//
//        given(memberService.createMember(Mockito.any(Member.class))).willReturn(member);
//        String content = gson.toJson(post);
//        //when
//        ResultActions actions = mockMvc.perform(
//                post("/api/members")
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(content));
//        //then
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(header().string("Location",is(startsWith("/api/members/"))));
//    }
//    @Test
//    void patchMemberTest() throws Exception{
//        //given
//        long memberId = 1L;
//        MemberPatchDto patch = new MemberPatchDto(0L,"홍구리동동","12345678");
//        Member member = mapper.memberPatchDtoToMember(patch);
//        member.setMemberId(memberId);
//        given(memberService.updateMember(Mockito.any(Member.class))).willReturn(member);
//        String content = gson.toJson(member);
//
//        //when
//        ResultActions actions = mockMvc.perform(
//                MockMvcRequestBuilders.patch("/api/members/1")
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(content)
//        );
//        actions.andExpect(status().isCreated());
//    }
//    @Test
//    void patchProfileTest() throws Exception{
//        //given
//        long memberId = 1L;
//        MemberProfileDto profilePatch = new MemberProfileDto(0L,"성남시 분당구","안녕하세요 홍길동 입니다","123456789");
//        Member member = new Member();
//        member.setEmail("gildong@gmail.com");
//        member.setDisplayName("홍길동");
//        member.setPassword("12341234");
//        mapper.memberProfileDtoToMember(profilePatch);
//        member.setMemberId(memberId);
//        given(memberService.updateProfile(Mockito.any(Member.class))).willReturn(member);
//        String content = gson.toJson(member);
//
//        //when
//        ResultActions actions = mockMvc.perform(
//                MockMvcRequestBuilders.patch("/api/members/profile/1")
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(content)
//        );
//        actions.andExpect(status().isCreated());
//    }
//    @Test
//    void getMemberTest() throws Exception{
//        //given
//        long memberId = 1;
//        Member member = new Member();
//        member.setEmail("gildong@gmail.com");
//        member.setDisplayName("홍길동");
//        member.setPassword("12341234");
//        member.setLocation("성남시");
//        member.setTitle("안녕하세요");
//        member.setAboutMe("안녕하세요 박기훈입니다.");
//
//        MemberResponseDto response = new MemberResponseDto(1L,"gildong@gmail.com","홍길동","성남시","안녕하세요","안녕하세요 박기훈입니다.");
//        given(memberService.findMember(Mockito.anyLong())).willReturn(new Member());
//        given(mapper.memberToMemberResponseDto(Mockito.any(Member.class))).willReturn(response);
//        //member, Mockito.eq(member)
//        //when
//        ResultActions actions = mockMvc.perform(
//                get("/api/members/"+memberId)
//                        .accept(MediaType.APPLICATION_JSON)
//        );
//        //then
//        actions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.email").value(member.getEmail()))
//                .andExpect(jsonPath("$.data.displayName").value(member.getDisplayName()))
//                .andExpect(jsonPath("$.data.location").value(member.getLocation()))
//                .andExpect(jsonPath("$.data.title").value(member.getTitle()))
//                .andExpect(jsonPath("$.data.aboutMe").value(member.getAboutMe()));
//
//    }
//    @Test
//    void deleteMemberTest() throws Exception {
//        //given
//        long memberId =1;
//        doNothing().when(memberService).deleteMember(memberId);
//        //when
//        ResultActions actions = mockMvc.perform(delete("/api/members/"+memberId));
//        //then
//        actions.andExpect(status().isNoContent());
//    }
//}
