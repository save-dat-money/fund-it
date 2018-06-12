package org.wecancodeit.columbus.fundit;

public class Login {

//    private long id;
    private String username;

    private String password;

    public Login(){};

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


//    @Override
//    public int hashCode() {
//        final int prime = 31;
//        int result = 1;
//        result = prime * result + (int) (id ^ (id >>> 32));
//        return result;
//    }
//
//    @Override
//    public boolean equals(Object obj) {
//        if (this == obj)
//            return true;
//        if (obj == null)
//            return false;
//        if (getClass() != obj.getClass())
//            return false;
//        Account other = (Account) obj;
//        if (id != other.id)
//            return false;
//        return true;
//    }
}
