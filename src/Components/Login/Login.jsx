import { useState } from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './Login.css';
import { Link } from 'react-router-dom';
import loginImg from "../../assets/images/login/register.jpg"

const Login = () => {

    const [showPass, setShowPass] = useState(false);


    return (

        <div className='lg:grid grid-cols-12 gap-6'>
            <div className='col-span-6 mx-auto my-auto'>
                <div className="login-container">
                    <div className="login-title">Welcome Back  <SiGnuprivacyguard /></div>
                    <form className="login-form" >

                        <div className="form-control col-span-1">
                            <label htmlFor="email" className="label">
                                {" "}
                                <span>Email Address<span className="text-red-500">*</span></span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="example@gmail.com"
                                required
                            // value={userInfo.email}
                            />
                        </div>
                        
                        <div className="relative">
                            <label htmlFor="password" className="label">
                                {" "}
                                <span>Password<span className="text-red-500">*</span></span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                placeholder="password"
                            // value={userInfo.password}
                            />
                            <div className="absolute right-5 top-14" onClick={() => setShowPass(!showPass)}>
                                {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                        </div>

                        <button>Sign In</button>
                        <p className='mt-8'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Forgot Password? </a>
                        </p>
                        <p className='mt-8'>
                            Don't you have an account? <Link to="/sign_up"><span className='text-blue-600 underline'>Sign Up</span> first</Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className='col-span-6 items-center justify-center my-auto'>
                
                <img className='login_img' src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Login;