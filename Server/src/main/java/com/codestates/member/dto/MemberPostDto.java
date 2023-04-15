package com.codestates.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class MemberPostDto {
    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String displayName;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
}
