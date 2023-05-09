package com.codestates.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@AllArgsConstructor
@NoArgsConstructor

public class MemberPostDto {
    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    @Pattern(regexp = "^[a-zA-Z0-9]*$", message = "이름은 영문자와 숫자로만 이뤄져야 합니다.")
    private String displayName;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
}
