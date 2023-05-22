import React from 'react';

function LoginPage() {
  let inputValues = {
    registerUserName: '',
    registerPsw: '',
    loginUserName : '',
    loginPsw : ''
  }

  let onSubmitBtnClick = function(e){
      if(e.target.id === "registerSubmit"){
        //POST NEW USER DATA
      }else {
        // LOOK FOR USER DATA IN DATABASE
        let found = false;
        /*fetch("https://dummyjson.com/users").then(response => response.json())
        .then(data => {
          data.users.forEach(element => {
            if(inputValues.loginUserName === element.username && inputValues.loginPsw === element.password){
                found = true;
            }
          });
          found ? console.log('sikeres belépés') : console.log('hibás adatok');
        });*/
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            
            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
          })
        })
        .then(res => res.json())
        .then(console.log);
      }
  }
  let formInputChange = function(e){
    inputValues[e.target.id] = e.target.value;
  }
  function showRegister(){
    document.querySelector('.login-modul').classList.add('d-none');
    document.querySelector('.register-modul').classList.remove('d-none');
  }
  function showLogin(){
    document.querySelector('.register-modul').classList.add('d-none');
    document.querySelector('.login-modul').classList.remove('d-none');
  }
  return (
    <>
      <div>Welcome to TCRW hosting</div>

      <button className='register' onClick={showRegister}>Register</button>
      <button className='login' onClick={showLogin}>Log In</button>
      
      <div className='register-modul d-none'>
        <div>Register</div>
        <form>
          <input className='register username' id="registerUserName" type="text" onChange= {formInputChange}></input>
          <input className="register password" id="registerPsw" type="password"onChange= {formInputChange}></input>
        </form>
        <button className="register submit" id="registerSubmit" onClick={onSubmitBtnClick}>submit</button>
      </div>
      
      <div className='login-modul d-none'>
        <div>Log In</div>
        <form>
          <input className='login username' id="loginUserName" type="text" onChange= {formInputChange}></input>
          <input className="login password" id="loginPsw" type="password" onChange= {formInputChange}></input>
        </form>
        <button className="login submit" id="loginSubmit" onClick={onSubmitBtnClick}>submit</button>
      </div>
      
    </>
  );
}

export default LoginPage;
