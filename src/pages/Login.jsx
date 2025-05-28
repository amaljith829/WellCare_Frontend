import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onsubmithandler = async (e) => {
    e.preventDefault()
    // handle login/signup here
  }

  return (
    <form className='min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100' onSubmit={onsubmithandler}>
      <div className='flex flex-col gap-5 m-auto items-start p-10 sm:min-w-[380px] w-full max-w-md border border-blue-100 rounded-2xl bg-white text-zinc-700 text-base shadow-2xl'>
        <p className='text-3xl font-bold text-blue-600 mb-1'>{state === 'Signup' ? "Create Account" : "Login"}</p>
        <p className='mb-3 text-gray-500'>{state === 'Signup' ? "Signup" : "Login"} to book an appointment</p>
        {
          state === "Signup" && <div className='w-full'>
            <label className='block mb-1 font-medium'>Full name</label>
            <input
              className='border border-zinc-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
              required
            />
          </div>
        }
        <div className='w-full'>
          <label className='block mb-1 font-medium'>Email</label>
          <input
            className='border border-zinc-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className='w-full'>
          <label className='block mb-1 font-medium'>Password</label>
          <input
            className='border border-zinc-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>
        <button className='bg-blue-500 hover:bg-blue-600 transition text-white w-full py-2 rounded-lg text-lg font-semibold shadow mt-2'>
          {state === 'Signup' ? "Create Account" : "Login"}
        </button>
        {
          state === "Signup"
            ? <p className='w-full text-center text-sm'>Already have an account? <span onClick={() => setState("Login")} className='text-blue-500 underline cursor-pointer'>Login here</span></p>
            : <p className='w-full text-center text-sm'>Create an account? <span onClick={() => setState("Signup")} className='text-blue-500 underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login