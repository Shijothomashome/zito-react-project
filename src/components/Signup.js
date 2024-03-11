import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  

    return (
        <div className="h-screen flex bg-gray-100">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">Create your account 🚀</h1>
                <form>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder='Your Name' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder='Your Password' />
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type='password' id='confirmPassword' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" placeholder='Confirm Your Password' />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type='checkbox' id='agree' className="mr-2" />
                        <label htmlFor='agree'>I agree to the Terms and Conditions</label>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <Link to='/' className="bg-green py-2 px-4 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded border border-green focus:outline-none focus:border-green-dark">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
