import React from 'react'
import './Register.css';

function Register() {
    return (
    
           <form>
  <label>
    <p class="label-txt">ENTER YOUR EMAIL</p>
    <input type="text" class="input"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR NAME</p>
    <input type="text" class="input"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR PASSWORD</p>
    <input type="text" class="input"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit">submit</button>
</form>
    )
}

export default Register
