package com.codestates.member.controller;


import com.codestates.dto.SingleResponseDto;
import com.codestates.member.dto.MemberPatchDto;
import com.codestates.member.dto.MemberPostDto;
import com.codestates.member.dto.MemberProfileDto;
import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.service.MemberService;
import com.codestates.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/api/members")
@Validated
@Slf4j
public class MemberController {
    private final static String MEMBER_DEFAULT_URL="/api/members";
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto)
    {
        Member member = memberMapper.memberPostDtoToMember(memberPostDto);
        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getMemberId());

        return ResponseEntity.created(location).build();
    }
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto){
        memberPatchDto.setMemberId(memberId);
        Member patchMember= memberService.updateMember(memberMapper.memberPatchDtoToMember(memberPatchDto));

        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, patchMember.getMemberId());

        return ResponseEntity.created(location).build();
    }
    @PatchMapping("/profile/{member-id}")
    public ResponseEntity patchProfile(@PathVariable("member-id")@Positive long memberId,
                                       @Valid @RequestBody MemberProfileDto memberProfileDto)
    {
        memberProfileDto.setMemberId(memberId);
        Member patchProfile = memberService.updateProfile(memberMapper.memberProfileDtoToMember(memberProfileDto));

        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, patchProfile.getMemberId());

        return ResponseEntity.created(location).build();
    }
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(new SingleResponseDto<>(memberMapper.memberToMemberResponseDto(member)), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId)
    {
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
