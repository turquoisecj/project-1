import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import SignUp from '../components/SignUp'

function Login() {
  return (
    <div>
        <Header/>
        <LoginForm/>
        <SignUp/>
    </div>
  )
}

export default Login