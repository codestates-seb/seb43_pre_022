package com.codestates.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private long memberId;
    private String email;
    //private String password; 빼달라는 우선님의 요청
    private String displayName;
    private String location;
    private String title;
    private String aboutMe;
}
