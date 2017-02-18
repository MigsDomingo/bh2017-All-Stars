package app.entities;

import java.util.Date;
import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class Post {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
	private Long postId;
	
	@Column
	private String source;
	
	@Column
	private String desc;
	
	@Column
	private User userId;
	
	@Column 
	private Category catId;
	
	@Column
	private ArrayList<Post> childrenId; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date postedAt = new Date();

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public Category getCatId() {
		return catId;
	}

	public void setCatId(Category catId) {
		this.catId = catId;
	}

	public ArrayList<Post> getChildrenId() {
		return childrenId;
	}

	public void setChildrenId(ArrayList<Post> childrenId) {
		this.childrenId = childrenId;
	}

	public Date getPostedAt() {
		return postedAt;
	}

	public void setPostedAt(Date postedAt) {
		this.postedAt = postedAt;
	}

	

	
	
}
