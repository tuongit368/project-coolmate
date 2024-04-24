import React, { useState } from 'react'

import { BiLogoFacebook, } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

import axios from "axios"

import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";

import "../styles/register.css"

const urlApi = "https://65e2dcb488c4088649f4ef41.mockapi.io/api/v1/register"


const RegisterSchema = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    password: yup.string().required()
  });



function Register() {

    // Khi dung thu vien hook-form thi k can dung useState

    // const [name, setText] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [dataRegister, setDataRegister] = useState({})

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterSchema)
    })

    const handleRegister = (data) => {

        // e.preventDefault()

        const postUser = axios.post(urlApi, data)

        postUser.then(
            (data) => setDataRegister(data.data)
        )
        
        postUser.catch(
            (error) => console.log(error)
        )

        reset()

        toast.success('Đăng ký thành công!', {
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
            
    }

    localStorage.setItem("dataRegister", JSON.stringify(dataRegister))

  return (
    <>
    <div className='form-regiter'>
            <div className="container" id="container">
                {/* <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f" ></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div> */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <h1>Sign up</h1>
                        <div className="social-container">
                            <a href="#" className="social"><BiLogoFacebook /></a>
                            <a href="#" className="social"><AiOutlineGooglePlus /></a>
                            <a href="#" className="social"><FiLinkedin /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="text" placeholder="Name" {...register("name")}/>
                        <span>{errors.name?.message}</span> 
                        <input type="email" placeholder="Email" {...register("email")} />
                        <span>{errors.email?.message}</span>
                        <input type="password" placeholder="Password" {...register("password")} />
                        <span>{errors.password?.message}</span>
                        <a href="#">Forgot your password?</a>
                        <button >Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        {/* <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div> */}
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn.</p>
                            <button onClick={() => {navigate("/login")}} className="ghost" id="signUp">Login</button>
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
    </>
    
  )
}


export default Register