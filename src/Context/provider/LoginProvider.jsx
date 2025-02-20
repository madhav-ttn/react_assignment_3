import { useState } from "react";
import { login } from "../loginContext";
export default function LoginProvider({children}){
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");

    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    
    const handleUsername=(event)=>{
        setUserName(event.target.value);
    }

    const handleLogin=()=>{
        if(username == null || username == undefined || username.trim().length === 0){
            alert("username can not be empty");
            console.log("username can not be empty");
            return;
        }
        if(email === null || email === undefined || email.trim().length === 0){
            alert("email can not be empty");
            console.log("email can not be empty");
            return;
        }
        setIsLoggedIn(!isLoggedIn);
    }
    const handleLogout=()=>{
        setUserName("");
        setEmail("");
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <login.Provider value={{isLoggedIn,setIsLoggedIn,email,username,handleEmail,handleUsername,handleLogin,handleLogout}} children={children}>
            {children}
        </login.Provider>
    )
}