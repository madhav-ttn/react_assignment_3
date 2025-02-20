import { useContext} from "react"
import { login } from "../Context/loginContext";
import LoginSection from "./LoginSection";


export default function UserProfile(){
   const {isLoggedIn,username,handleUsername,email,handleEmail,handleLogin}=useContext(login);
    return(
        <div className="profile-section">
            {!isLoggedIn &&
            <form action="" onSubmit={handleLogin}>
                <input type="text"  placeholder="name" value={username} onChange={(e)=>handleUsername(e)}/>
                <input type="email"  placeholder="email" value={email} onChange={(e)=>handleEmail(e)}/>
                <button type="submit">Login</button>
            </form>
            }
            {isLoggedIn?(
            <div>
                <h1>Welcome Back</h1>
                <p>Username:{username}</p>
                <p>Email:{email}</p>
            </div>
           ):(<h1>Please Login</h1>)}
            <LoginSection/>
        </div>
    )
}