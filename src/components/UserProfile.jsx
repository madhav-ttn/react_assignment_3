import { useContext} from "react"
import { User } from "../Context/user";

export default function UserProfile(){
   const {username,setUserName,email,setEmail}=useContext(User);
    return(
        <div className="profile-section">
            <input type="text"  placeholder="name" onChange={(e)=>setUserName(e.target.value)}/>
            <input type="text"  placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            {username && <h3>{username}</h3>}
            {email && <h3>{email}</h3>}
        </div>
    )
}