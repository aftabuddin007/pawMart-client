import React, { use, useEffect, useState } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
   const navLinkClass = ({isActive})=>
  isActive?'text-[#872953] underline font-bold':'hover:text-[#872953] hover:underline ';
const {user,logOut} = use(AuthContext)

const handleLogout = ()=>{
  // console.log('logout')
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
       
         <div className='bg-base-200  sticky top-0 z-50 shadow '>
            <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'className={navLinkClass}> Home</NavLink></li>
      <li><NavLink to='/pets-supplies' className={navLinkClass}> Pets/Supplies</NavLink></li>
      <li><NavLink to='/blog' className={navLinkClass}> Blog</NavLink></li>
      <li className='lg:hidden  '> <input onChange={(e)=>handleTheme(e.target.checked)} 
    defaultChecked={localStorage.getItem('theme') === "dark"}
    type="checkbox" value="synthwave" className="toggle theme-controller text-black-200 " />
</li>
      {user &&<> 
      <li><NavLink to='/add-list' className={navLinkClass}> Add Listing</NavLink></li>
      <li><NavLink to='/my-list' className={navLinkClass}> My Listings</NavLink></li>
      <li><NavLink to='/my-order' className={navLinkClass}> My Orders</NavLink></li>
      
      </>}
      </ul>
    </div>
    <Link to ='/' className='flex gap-2'> 

    <a className="btn btn-ghost text-xl font-bold "><img src="https://i.ibb.co.com/5gShN8km/images-1-removebg-preview.png" alt="" className='h-10 w-10' /> 
    <h1 class="text-[12px] sm:text-2xl font-extrabold text-purple-500 font-[Comic_Sans_MS] tracking-wide">
  <span class="italic">Paw</span><span class="not-italic">Mart</span>
</h1>
    </a>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl ">
      <li><NavLink to='/'className={navLinkClass}> Home</NavLink></li>
      <li><NavLink to='/pets-supplies' className={navLinkClass}> Pets/Supplies</NavLink></li>
      <li><NavLink to='/blog' className={navLinkClass}> Blog</NavLink></li>

      {user &&<> 
      <li><NavLink to='/add-list' className={navLinkClass}> Add Listing</NavLink></li>
      <li><NavLink to='/my-list' className={navLinkClass}> My Listings</NavLink></li>
      <li><NavLink to='/my-order' className={navLinkClass}> My Orders</NavLink></li>
      
      </>}
      
    </ul>
  </div>
  <div className="navbar-end ">
{/* theme */}
<div className='hidden lg:block'>
<input onChange={(e)=>handleTheme(e.target.checked)} 
    defaultChecked={localStorage.getItem('theme') === "dark"}
    type="checkbox" value="synthwave" className="toggle theme-controller  " />

</div>


<div className="navbar-end flex ">
    
    {
      user ? (<div className='flex justify-between items-center gap-4'>
    <div >

<div className="dropdown dropdown-end z-50">
  <div tabIndex={0} role="button" className=" m-1"><img src={user?.photoURL } alt="image" className='w-12 h-12 rounded-full object-cover'/></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
    <li> <NavLink to='/my-profile' className='btn'>My Profile</NavLink>    </li>
    <li> <NavLink to='/dashboard' className='btn'>Dashboard</NavLink>    </li>
<li>  <p>{user.email}</p> </li>
    <li><button onClick={handleLogout} className="btn btn-primary
"> LogOut</button></li>
  </ul>
</div>


      
    </div>

    </div>)
    :(<div className='flex justify-between gap-5'>
<Link to='/auth/login' className="btn  btn-outline btn-primary
"> Login</Link>
<Link to='/auth/signup' className="btn btn-primary
"> SignUp</Link>
</div>)
    }
    
  </div>






  </div>
</div>
        </div>
      
    );
};

export default Navbar;