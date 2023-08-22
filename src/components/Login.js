import React from 'react'
import Logo from './Logo';

import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="login_bg_gradient bg-cover h-screen grid place-items-center text-white">
      <Logo style="w-52 absolute top-0 left-0 m-8" />
      <div className="bg-[rgba(0,0,0,.75)] p-10 w-auto space-y-6">
        <h2 className="text-3xl font-medium text-center">Masuk</h2>
        <button onClick={() => signIn('google')} className="bg-white text-black flex gap-2 items-center px-6 py-3 text-xl rounded-lg">
          <FcGoogle className='text-3xl'/>
          Masuk dengan Google
        </button>
        <button onClick={() => signIn('github')} className="bg-white text-black flex gap-2 items-center px-6 py-3 text-xl rounded-lg">
          <DiGithubBadge className='text-3xl'/>
          Masuk dengan GitHub
        </button>
        <button onClick={() => signIn('facebook')} className="bg-white text-black flex gap-2 items-center px-4 py-3 text-xl rounded-lg">
          <FaFacebook className='text-2xl'/>
           Masuk dengan Facebook
        </button>
      </div>
    </div>
  );
}

export default Login