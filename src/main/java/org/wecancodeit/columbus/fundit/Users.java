package org.wecancodeit.columbus.fundit;

import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "user")
public class Users {

	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int id;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "name")
	private String name;

	@Column(name = "last_name")
	private String last_name;

	@Column(name = "active")
	private int active;
	
	//fund-it
	@OneToOne(mappedBy = "users")
	public Account account; 
	
	@ManyToOne
	public Role role; 

//	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
//	private Set<Role> roles;

	
	public Users() {
		
	}
	
	//for making users in spring 
	public Users(String name, String last_name, String password, String email, Role role, Account account) {
		
		this.name = name; 
		this.last_name = last_name; 
		this.password = password; 
		this.email = email; 
		this.account = account;
	}
	
	//for making users in postgres
	public Users(Users users) {
	
		this.active = users.getActive();
		this.email = users.getEmail();
		this.role = users.getRole();
		this.name = users.getName();
		this.last_name = users.getLastName();
		this.id = users.getId();
		this.password = users.getPassword();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return last_name;
	}

	public void setLastName(String lastName) {
		this.last_name = lastName;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public Role getRole() {
		return role;
	}

	public void setRoles(Role roles) {
		this.role = roles;
	}
	
	public Account getAccount() {
		return this.account;
	}

}
