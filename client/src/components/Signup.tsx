"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("http://localhost:4200/principal/register", {
      email, password
    })
    setEmail("");
    setPassword("");
  };

  return (
    <div>
  <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
  <h2 className="text-2xl font-bold pb-5">SignUp</h2>
  <form>
   <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-medium">
        Your email
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="andrew@mail.com"
        value={email}
         onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block mb-2 text-sm font-medium">
        Your password
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="*********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <p className="text-red-500 pb-5" />
    </div>
    <div className="flex items-center justify-between mb-4">
      <button
        type="submit"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
        onClick={handleSubmit}
      >
        Register
      </button>
      <div className="flex items-center text-sm">
        <p>Do not have an account?</p>
        <Link href={"/login"} className="underline cursor-pointer ml-1">
            Login
            </Link>
      </div>
    </div>
  </form>
</div>

 </div>
  )
}

export default SignupPage;