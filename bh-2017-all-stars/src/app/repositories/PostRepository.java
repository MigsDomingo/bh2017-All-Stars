package app.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import app.entities.Category;

@Repository
public interface PostRepository {
	
	public Category findByPostId(String postId);
	public List<Category> findAll();
}
