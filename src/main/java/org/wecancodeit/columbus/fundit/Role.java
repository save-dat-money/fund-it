package org.wecancodeit.columbus.fundit;

import java.util.Collection;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "role")
public class Role {
	
	@Id
	@Column(name = "role_id")
	private int roleId; 

	@Column(name = "role") 
	private String role;
	
	@JsonIgnore
	@OneToMany(mappedBy = "role")
	private Collection<Users> users; 

	public Role(){
		
	}
	
	public Role(String role) {
		this.role = role; 
	}
	
	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	} 
	
	public void setUsers(Collection<Users> users) {
		this.users = users; 
	}
	
	
}
