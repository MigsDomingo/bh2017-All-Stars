package app.entities;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ReplyToPost {
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="postId")
	private Post postId;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
	private Long replyId;
	
	@Column
	private String source;
	
	@Column
	private boolean agree;
	
	@Column
	private String desc;
	
	@Column
	private User userId;
	
	@Column
	private ArrayList<Post> childrenId; 

	@Temporal(TemporalType.TIMESTAMP)
	private Date postedAt = new Date();

	public Post getPostId() {
		return postId;
	}

	public void setPostId(Post postId) {
		this.postId = postId;
	}

	public Long getReplyId() {
		return replyId;
	}

	public void setReplyId(Long replyId) {
		this.replyId = replyId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public boolean isAgree() {
		return agree;
	}

	public void setAgree(boolean agree) {
		this.agree = agree;
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
