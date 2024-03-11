
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className=" flex bg-gray-100">
            <div className="w-[90%] my-10 sm:my-20 sm:w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default p-4">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">Log in to your account 🔐</h1>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder='Your Password' />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type='checkbox' id='remember' className="mr-2" />
                        <label htmlFor='remember'>Remember Me</label>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <Link to='/' className="bg-green py-2 px-4 text-sm text-white  bg-orange-500 hover:bg-orange-600 rounded border border-green focus:outline-none focus:border-green-dark">Login</Link>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <Link  className="text-blue-500 hover:text-blue-700">Forgot Password?</Link>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <p>Don’t have an account yet? <Link to="/signup" className=" text-blue-500 hover:text-blue-700">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
