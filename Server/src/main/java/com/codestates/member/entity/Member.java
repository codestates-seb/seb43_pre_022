package com.codestates.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    @Column(nullable=false,unique=true)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false,unique = true)
    private String displayName;

    private String location;

    private String title;

    private String aboutMe;
}
