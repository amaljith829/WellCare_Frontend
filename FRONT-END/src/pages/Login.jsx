import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onsubmithandler = async (e) => {
    e.preventDefault()

  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w[340px] sm:min-w-96 border rounded-xl text-zinc-700 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Signup' ? "Create Account" : "Login"} </p>
        <p>Please  {state === 'Signup' ? "Signup" : "Login"}to book appoinment</p>
        {
          state === "Signup" && <div className='w-full'>
            <p>Full name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }


        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>
        <button className='bg-blue-500 text-white w-full py-2 rounded-md text-base'>{state === 'Signup' ? "Create Account" : "Login"}</button>
        {
          state === "Signup"
            ? <p>Alredy have an account?<span onClick={() => setState("Login")} className=' text-blue-500 underline cursor-pointer'>Login here</span></p>
            : <p>Create an account ?<span onClick={() => setState("Signup")} className=' text-blue-500 underline cursor-pointer'>Click here</span></p>
        }
      </div>

    </form>
  )
}

export default Login