package com.codestates.member.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());

        return memberRepository.save(member);
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
