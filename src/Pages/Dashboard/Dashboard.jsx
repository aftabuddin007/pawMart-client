import React from 'react';
import { FaClipboardList, FaFirstOrderAlt } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import { CiViewList } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";

const Dashboard = () => {


    const navLinkClass = ({isActive})=>
  isActive?'bg-blue-300  font-bold':'hover:bg-blue-300 hover:font-bold ';


    return (
        <div className='max-w-7xl mx-auto'>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4 text-3xl font-bold">PawMart Dashboard</div>
    </nav>
    {/* Page content here */}
    <Outlet></Outlet>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-blue-100 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      
      <ul className="menu w-full grow font-bold text-xl">
        {/* List item */}
        <li>
          <NavLink to='/dashboard'  data-tip="Dashboard">
            {/* Home icon */}
            <RxDashboard />

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> */}
            <span className="is-drawer-close:hidden">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/myProfile' className={({ isActive }) =>
      `is-drawer-close:tooltip is-drawer-close:tooltip-right ${navLinkClass({ isActive })}`
    } data-tip="My Profile">
            {/* Home icon */}
            <CgProfile />

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> */}
            <span className="is-drawer-close:hidden">My Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
    to="/dashboard/my-order"
    className={({ isActive }) =>
      `is-drawer-close:tooltip is-drawer-close:tooltip-right ${navLinkClass({ isActive })}`
    }
    data-tip="My Orders"
  >
    <FaFirstOrderAlt />
    <span className="is-drawer-close:hidden">My Order</span>
  </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/add-list' className={({ isActive }) =>
      `is-drawer-close:tooltip is-drawer-close:tooltip-right ${navLinkClass({ isActive })}`
    } data-tip="Add List">
            {/* Home icon */}
<CiViewList />
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> */}
            <span className="is-drawer-close:hidden">Add List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/my-list' className={({ isActive }) =>
      `is-drawer-close:tooltip is-drawer-close:tooltip-right ${navLinkClass({ isActive })}`
    } data-tip="My List">
            {/* Home icon */}
<FaClipboardList />

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> */}
            <span className="is-drawer-close:hidden">My List</span>
          </NavLink>
        </li>
         <li className='mt-auto'>
          <NavLink to='/' className={({ isActive }) =>
      `is-drawer-close:tooltip is-drawer-close:tooltip-right ${navLinkClass({ isActive })}`
    } data-tip="Home">
            {/* Home icon */}


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Home</span>
          </NavLink>
        </li>
       
        
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Dashboard;