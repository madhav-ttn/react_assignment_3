import { useContext } from "react"
import { login } from "../Context/loginContext";

export default function LoginSection(){
    const {isLoggedIn,handleLogout}=useContext(login);
    return(
        <div>
          {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
        </div>
    )
}