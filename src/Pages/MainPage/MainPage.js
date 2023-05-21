import React from 'react';

function LoginPage() {
    let onSubmitBtnClick = function(e){
        console.log(e.target);
    }
    let vmi = function(){

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
          <input className='register username' type="text" onChange={vmi}></input>
          <input className="register password" type="password"onChange={vmi}></input>
        </form>
        <button className="register submit" onClick={onSubmitBtnClick}>submit</button>
      </div>
      
      <div className='login-modul d-none'>
        <div>Log In</div>
        <form>
          <input className='login username' type="text" onChange={vmi}></input>
          <input className="login password" type="password" onChange={vmi}></input>
        </form>
        <button className="login submit" onClick={onSubmitBtnClick}>submit</button>
      </div>
      
    </>
  );
}

export default LoginPage;
