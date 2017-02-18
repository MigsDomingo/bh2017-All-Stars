package app.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import app.entities.Category;

@Repository
public interface CommentRepository {
	public Category findByCommentId(String commentId);
	public List<Category> findAll();
	
}
