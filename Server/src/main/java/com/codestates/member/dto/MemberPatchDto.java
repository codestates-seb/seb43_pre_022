package com.codestates.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class MemberPatchDto {
    private long memberId;
    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String displayName;
    @NotBlank
    private String password;
    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
}
