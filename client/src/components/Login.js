import React from "react"
import {useForm} from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const {register, handleSubmit} = useForm()

  const history = useHistory()


  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      password: data.password
    }
    
    axiosWithAuth()
      .post("/api/login", newUser)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        console.log(res)
        history.push('/protected')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:&nbsp;
          <input 
            type='text'
            name='username'
            ref={register}
          />
        </label>
        <label>Password:&nbsp;
          <input 
            type='password'
            name='password'
            ref={register}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
