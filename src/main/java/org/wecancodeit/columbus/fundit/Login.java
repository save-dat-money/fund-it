package org.wecancodeit.columbus.fundit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Login {
    @Id
    @GeneratedValue
    private long id;
    private String username;
    private String password;

    public Login(){}

    public Login(String name, String password){
        this.username = name;
        this.password = password;
    }

    public String getUsername(){
        return username;
    }

    public String getPassword(){
        return password;
    }

    public boolean checkPassword(String input){
        if(input == password){
            return true;
        }
        return false;
    }

    public long getId(){
        return id;
    }

}
