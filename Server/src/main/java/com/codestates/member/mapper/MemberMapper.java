package com.codestates.member.mapper;

import com.codestates.member.dto.MemberPatchDto;
import com.codestates.member.dto.MemberPostDto;
import com.codestates.member.dto.MemberProfileDto;
import com.codestates.member.dto.MemberResponseDto;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    Member memberProfileDtoToMember(MemberProfileDto memberProfileDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
}
