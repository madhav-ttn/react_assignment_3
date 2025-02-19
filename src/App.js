import './App.css';
import LoginSection from './components/LoginSection';
import UserProfile from './components/UserProfile';
import { login } from './Context/loginContext';
import { useState } from 'react';
import { User } from './Context/user';

function App() {
  return (
      <div className="App">
            <LoginSection/>
         <User.Provider value={{username,setUserName,email,setEmail}}>
            <UserProfile/>
         </User.Provider>
      </div>
  );
}

export default App;
