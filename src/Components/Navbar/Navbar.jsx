import React, { use, useEffect, useState } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
   const navLinkClass = ({isActive})=>
  isActive?'text-[#872953] underline font-bold':'hover:text-[#872953] hover:underline ';
const {user,logOut} = use(AuthContext)

const handleLogout = ()=>{
  console.log('logout')
logOut()
  .then(()=>{
    toast.success('Logout Successfully.')
  })
  .catch(err=>{
    console.log(err)
  })
}






const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light')
useEffect(()=>{
  const html = document.querySelector('html')
  html.setAttribute("data-theme",theme)
  localStorage.setItem('theme',theme)
},[theme])
const handleTheme = (checked)=>{
  setTheme(checked ? "dark" : "light")
}


    return (
        <div className=' bg-gradient-to-r from-[#009fff] to-[#ec2f4b] '>
            <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'className={navLinkClass}> Home</NavLink></li>
      <li><NavLink to='/auth/login' className={navLinkClass}> Login In</NavLink></li>
      <li><NavLink to='/auth/signup' className={navLinkClass}> Sign Up</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">EcoCart</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/' className={navLinkClass}> Home</NavLink></li>
      <li><NavLink to='/auth/login' className={navLinkClass}> Login In</NavLink></li>
      <li><NavLink to='/auth/signup' className={navLinkClass}> Sign Up</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end gap-3">
{/* theme */}
<input onChange={(e)=>handleTheme(e.target.checked)} 
    defaultChecked={localStorage.getItem('theme') === "dark"}
    type="checkbox" value="synthwave" className="toggle theme-controller" />

{user?     <Link onClick={handleLogout} className='btn  '>LogOut</Link>
:    <Link to='/auth/login' className='btn  '>Log In </Link>
}


  </div>
</div>
        </div>
    );
};

export default Navbar;