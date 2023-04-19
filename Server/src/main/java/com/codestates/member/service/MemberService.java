package com.codestates.member.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.login.CustomAuthorityUtils;
import com.codestates.login.MemberRegistrationApplicationEvent;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
@Slf4j
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;//securityConfig에서 Bean 등록해준다.
    private final ApplicationEventPublisher publisher;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, ApplicationEventPublisher publisher, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.publisher = publisher;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());

        // 패스워드 암호화로 저장
        String encryptedPassword=passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        //member 이메일로 role 확인후 DB저장
        List<String> roles = authorityUtils.createRoles(member.getPassword());
        member.setRoles(roles);

        Member savedMember=memberRepository.save(member);

        publisher.publishEvent(new MemberRegistrationApplicationEvent(this, savedMember));//Todo : 이 코드 지워본 상태에서 돌려보기
        return savedMember;
    }
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getDisplayName())
                .ifPresent(displayName->findMember.setDisplayName(displayName));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password->findMember.setPassword(password));

        return memberRepository.save(findMember);
    }
    public Member updateProfile(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());
        findMember.setLocation(member.getLocation());
        findMember.setAboutMe(member.getAboutMe());
        findMember.setTitle(member.getTitle());
        return memberRepository.save(findMember);
    }
    public Member findMember(long memberId){

        //Map principal = (Map) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //log.info("memberId22  "+String.valueOf((Long)principal.get("memberId")));


        return findVerifiedMember(memberId);
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }
}
