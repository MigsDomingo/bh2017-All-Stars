package app.entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Category {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
	private Long catId;
	
	@Column
	private String catName;

	public Long getCatId() {
		return catId;
	}

	public void setCatId(Long id) {
		this.catId = catId;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}
	
	
}
