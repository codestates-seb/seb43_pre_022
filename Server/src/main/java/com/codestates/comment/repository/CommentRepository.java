package com.codestates.comment.repository;

import com.codestates.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByAnswer_AnswerId(long answerId);
}
