import { useState } from "react";
import Iphone from '../images/Iphone.png'
import Logo from '../images/logo.png'

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
            <div className="flex flex-colum">
                <div className="pr-10 hidden md:block">
                    <img src={Iphone} width="300" />
                </div>
                <div>
                    <div className="bg-white border border-gray-300 w-80 pt-10 pb-60 flex items-center flex-col mb-3 relative">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="200"
                        />
                        <form action="" className="mt-8 w-64 flex flex-col">
                            <input
                                autoFocus
                                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                type="text"
                                value={email}
                                placeholder="Phone number, username or email"
                            />
                            <input
                                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                type="password"
                                value={password}
                                placeholder="Password"
                            />
                            <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                                Log in
                            </button>
                            <div className="text-sm text-center text-red-500 absolute bottom-20 px-8">
                                Sorry, your email/password was incorrect. Please double-check and rty again.
                            </div>
                        </form>
                    </div>
                    <div className="bg-white border border-gray-300 text-center w-80 py-4">
                        <span className="text-sm">Don't have a account?</span>
                        <a className="text-blue-500 text-sm font-semibold ml-1 cursor-pointer">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}