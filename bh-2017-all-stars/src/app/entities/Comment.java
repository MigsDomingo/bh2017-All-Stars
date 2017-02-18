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

public class Comment {
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="replyId")
	private ReplyToPost replyId;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
	private Long commentId;
	
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

	public ReplyToPost getReplyId() {
		return replyId;
	}

	public void setReplyId(ReplyToPost replyId) {
		this.replyId = replyId;
	}

	public Long getCommentId() {
		return commentId;
	}

	public void setCommentId(Long commentId) {
		this.commentId = commentId;
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
