import React from 'react';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Outlet } from 'react-router';

const Dashboardlayout = () => {
    return (
        <div>
            <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {/* <Outlet></Outlet> */}
                <Dashboard></Dashboard>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
        </div>
    );
};

export default Dashboardlayout;