package com.codestates.answer.entity;


import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "questionId")
    private Question question;

    @OneToMany(mappedBy = "answer")
    private List<Comment> comments = new ArrayList<>();

}
