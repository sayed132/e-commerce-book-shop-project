import { useState } from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './SignUp.css';
import { Link } from 'react-router-dom';
import loginImg from "../../assets/images/login/register.jpg"

const SignUp = () => {

    const [showPass, setShowPass] = useState(false);


    return (

        <div className='lg:grid grid-cols-12 gap-6'>
            <div className='col-span-6 mx-auto my-auto'>
                <div className="login-container">
                    <div className="login-title">Sign up <SiGnuprivacyguard /></div>
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
                        <div className="form-control col-span-1">
                            <label htmlFor="name" className="label">
                                {" "}
                                <span>Full Name<span className="text-red-500">*</span></span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder='Your Full Name'
                                required
                            />
                        </div>
                        <div className="form-control col-span-1">
                            <label htmlFor="role" className="label">
                                {" "}
                                <span>Your Role<span className="text-red-500">*</span></span>
                            </label>
                            <select
                                id="role"


                                required
                            >
                                <option selected disabled>Select An Option </option>
                                <option>user</option>
                                <option>seller</option>
                                <option>visitor</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label htmlFor="role" className="label">
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

                        <button>Sign up</button>
                        <p className='mt-8'>
                            Already LoggedIn? <Link to="/LogIn"><span className='text-blue-600 underline'>Sign In</span> first</Link>
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

export default SignUp;