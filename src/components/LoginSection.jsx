import { useContext } from "react"
import { login } from "../Context/loginContext";

export default function LoginSection(){
    const {isLoggedIn,setIsLoggedIn}=useContext(login);
    return(
        <div>
           <h1>{isLoggedIn?"Welcome Back":"Please Log In"}</h1>
           <button onClick={()=>{
            setIsLoggedIn((prev)=>!prev)
           }}>{isLoggedIn?"Logout":"Login"}</button>
        </div>
    )
}