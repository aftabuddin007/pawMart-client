import React, { use, useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
const [show,setShow]=useState(false)
const {signInEmail,googleSignIn} = use(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password =  form.password.value
        // console.log(email,password)
        signInEmail(email,password)
        .then(res=>{
            const user = res.user
            console.log(user)
            toast.success('LogIn Successfully.')
            navigate('/')
        })
        .catch(err=>{
        toast.error('Some thing went wrong.Please try again.')
        console.log(err.message)
    })
    }
    const handleGoogleSignIn =()=>{
        googleSignIn()
         .then(res=>{
        const user = res.user
        console.log(user)
        toast.success('Login Successful')
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(err=>{
        console.log(err.code,err.message)
        toast.error(err.message)
    
      })
}

    return (
        <div>
             <div className='items-center justify-center flex   min-h-screen bg-[#516E91]'>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login Your Account</h1>
        <form  onSubmit={handleLogin}>
          <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input name='email' 
          type="email" 
        //   ref={emailRef}
           
           className="input" placeholder="Email" required />
          {/* password */}
          <div className='relative'>
            <label className="label">Password</label>
          <input name='password' type={show ? 'text':'password'} className="input" placeholder="Password" required />
          <span onClick={()=>setShow(!show)} className='absolute right-7 top-8 cursor-pointer z-50'>{show ? <FaRegEye />:<FaEyeSlash />}</span>
          </div>
          {
            // error && <p className='text-red-500 text-xs'>{error}</p>
          }  
          
            <button type='button' 
            // onClick={handleForgetPassword} 
            className=" text-left  link link-hover">Forgot password?</button>
            
          <button type='submit' className="btn btn-success mt-4 text-white">Login</button>
          <p className='text-center font-bold text-md'>Or</p>
          <div className='text-center  '>
            {/* Google */}
<button onClick={handleGoogleSignIn}  className="btn bg-white text-black border-[#e5e5e5] w-full">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
          </div>
          <p className='text-center mt-4 font-semibold '>Don't Have an account? <Link to='/auth/signup' className='text-red-600'>SignUp</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Login;