import React from 'react'
import './Login.css';

function Login() {
    return (
        <div class="wrapper fadeInDown">
            <div id="formContent">


                <div class="fadeIn first">
                    <img src="http://placehold.it/20x20" id="icon" alt="User Icon" />
                </div>

                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" class="fadeIn fourth" value="Log In" />
                </form>

                <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>

    )
}

export default Login
