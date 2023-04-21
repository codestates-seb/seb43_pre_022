package com.codestates.question.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false, length = 45)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @JsonManagedReference
    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

//    public void addAnswer(Answer answer) {
//        answers.add(answer);
//        if (answer.getQuestion() != this) {
//            answer.setQuestion(this);
//        }
//    }
}
