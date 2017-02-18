package app.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import app.entities.Category;

@Repository
public interface ReplyToPostRepository {

	public Category findByReplyId(String replyId);
	public List<Category> findAll();
}
