package model;

import java.util.Set;

//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinTable;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;

import javax.persistence.*;
//import java.util.Set;


@Entity
@Table(name = "user")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int id;
	
	public Users(){
	
	}

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

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles;

}
