import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = ({onLogin}) => {
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()

    const apiURL = import.meta.env.VITE_PRODUCTS_API
    
    const checkLogin = (data) =>{
        console.log("Form data",data)
        axios.post(`${apiURL}/users/login`,data)
        .then(res => {
            console.log(res.data)
            alert("login sucessful")
            onLogin()
            navigate('/products')
        })
        .catch(error => console.log(error))

    }

  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(checkLogin)} >

            <div>
                <input 
                {...register("email")}
                type="email" 
                placeholder='Enter email' 
                />

            </div>
            <div>
                <input 
                {...register("password")}
                type="password" 
                placeholder='Enter password' 
                />

            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login