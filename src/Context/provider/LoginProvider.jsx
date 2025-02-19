import { useState } from "react";
import { login } from "../loginContext";
export default function LoginProvider({children}){
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return(
        <login.Provider value={{isLoggedIn,setIsLoggedIn}} children={children}>
            {children}
        </login.Provider>
    )
}