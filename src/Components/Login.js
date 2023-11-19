import React from 'react';
import logo from '../Images/logo.png';

function Login() {
  return (
    <div className='flex flex-col md:flex-row w-full md:w-[40%] gap-4 mx-auto my-10'>
      <div className='w-full bg-transparent shadow-2xl py-8 md:py-12 px-4 md:px-7 rounded-md'>
        <form className='max-w-md mx-auto'>
          <div className='flex flex-col items-center'>
            <img src={logo} alt='' className='w-16 h-16 mx-auto mb-2' />
            <h1 className='font-bold text-xl mb-2'>Log in</h1>
            <input
              type='email'
              placeholder='Email'
              className='w-full px-3 py-2 border-2 rounded-md my-2'
            />
            <input
              type='password'
              placeholder='Password'
              className='w-full px-3 py-2 border-2 rounded-md my-2'
            />
          </div>

          <div className='flex items-center ml-2 mb-2'>
            <input type='checkbox' className='mr-2' />
            <label className='text-xs'>Keep me logged in</label>
            <span className='text-xs ml-auto text-blue-500 cursor-pointer'>
              Forgot password
            </span>
          </div>

          <button className='bg-blue-700 w-full py-2 text-white rounded-md cursor-pointer hover:bg-blue-900 mb-2'>
            Log in
          </button>

          <div className='flex justify-center text-xs'>
            <span>Don't have an account?</span>
            <span className='text-blue-500 ml-1 cursor-pointer'>Register</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
