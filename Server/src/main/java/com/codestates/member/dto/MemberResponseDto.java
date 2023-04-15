package com.codestates.member.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String password;
    private String displayName;
    private String location;
    private String title;
    private String aboutMe;
}
