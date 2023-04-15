package com.codestates.member.dto;

import lombok.Getter;

@Getter
public class MemberProfileDto {
    private long memberId;
    private String location;
    private String title;
    private String aboutMe;
    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
}
