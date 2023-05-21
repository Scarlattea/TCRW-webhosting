import React from 'react';
import { getDatabase } from "firebase/database";


function LoginPage() {
    let onSubmitBtnClick = function(e){
        console.log('submit clicked');
        console.log(e.target);
        fetch('https://tcrw-hosting-default-rtdb.europe-west1.firebasedatabase.app/');
    }
  return (
    <>
      <div>Welcome to TCRW hosting</div>

      <button className='register'>Register</button>
      <button className='login'>Log In</button>
      
      <div>Register</div>
      <form>
        <input className='username' type="text"></input>
        <input className="password" type="password"></input>
      </form>
      <button className="register" onClick={onSubmitBtnClick}>submit</button>

      <div>Log In</div>
      <form>
        <input className='username' type="text"></input>
        <input className="password" type="password"></input>
      </form>
      <button className="login" onClick={onSubmitBtnClick}>submit</button>
    </>
  );
}

export default LoginPage;
