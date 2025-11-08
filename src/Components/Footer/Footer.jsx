import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-indigo-500 text-base-content p-10">
  <aside>
    <img src="https://img.icons8.com/stickers/100/cat-footprint.png" alt="" className='h-25 w-25'/>
    <p>
      Paw Mart is a one-stop pet care store <br /> offering high-quality pet food, <br />
      accessories, grooming products,<br /> and toys for all kinds of pets. 
      </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer sm:footer-horizontal footer-center bg-indigo-500  text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by PawMart</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;