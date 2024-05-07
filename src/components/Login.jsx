import React from 'react'

import { BiLogoFacebook, } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../styles/login.css"

function Login() {

    const LoginSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
      });
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginSchema)
      })

  const navigate = useNavigate()

  const handleFromLogin = (data) => {
        const dataRegister = JSON.parse(localStorage.getItem("dataRegister"))
        console.log(dataRegister)

        if(data.email === dataRegister.email && data.password == dataRegister.password){

            toast.success('Đăng nhập thành công!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
    
                setTimeout(() => {
                    navigate("/")
                }, 3000);
        } else {

            toast.error('Đăng nhập thất bại!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

                setTimeout(() => {
                    navigate("/login")
                }, 3000);

                reset();
        }
  }

  return ( 
  <>
    <div className='form-login'>
            <div className="container" id="container">
                  <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit(handleFromLogin)}>
                        <h1>Login</h1>
                            <div className="social-container">
                                <a href="#" className="social"><BiLogoFacebook /></a>
                                <a href="#" className="social"><AiOutlineGooglePlus /></a>
                                <a href="#" className="social"><FiLinkedin /></a>
                            </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" {...register("email")} />
                        <span>{errors.email?.message}</span>
                        <input type="password" placeholder="Password" {...register("password")} />
                        <span>{errors.password?.message}</span>
                        <a href="#">Forgot your password?</a>
                        <button >Login</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn.</p>
                            <button onClick={() => {navigate("/register")}} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />

        {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        /> */}
    </>
  )
}

export default Login