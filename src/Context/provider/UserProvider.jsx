import { useState } from "react";
import { User } from "../user";

export default function UserProvider({children}){
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const handleLogin=()=>{
        if(username.trim.length===0 || email.trim.length===0){
            alert("username or email can not be empty");
            return;
        }
        
    }
    return(
        <User.Provider value={{username,setUserName,email,setEmail}} children={children}>
            {children}
        </User.Provider>
    )
}