import React from 'react'
import '../styles/LoginForm.css';

function LoginForm() {
    return (
        <div>
            <form>
                <label className='label'>Username:</label>
                <input className='input-field' type="text" required />

                <label className='label'>Password:</label>
                <input className='input-field' type="password" required />

                <button className='button-login' type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm