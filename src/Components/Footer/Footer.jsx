import React from 'react';

const Footer = () => {
    return (
        <footer className="footer pr-[5%] pl-[5%] md:pl-[12%] py-[10%] md:py-[4%] bg-[#30246c]  text-white ">
    
       <aside >
        <img src="https://i.ibb.co/wK6HfpK/Katel-logo-round.png" alt="Logo" draggable="false" className='w-[30%] md:w-[40%] '  />
          <p>SISCOTEK Industries Ltd.<br/>Providing reliable tech since 2001</p>
        </aside> 
        <nav className='text-white'>
          <header className="footer-title ">About Us</header> 
          <p className="w-16 h-[3px] mb-3 bg-yellow-400"></p>
          <a className="cursor-pointer hover:text-yellow-500">Our company</a>
          <a className="cursor-pointer hover:text-yellow-500">Our services</a>
          <a className="cursor-pointer hover:text-yellow-500">Careers</a>
          <a className="cursor-pointer hover:text-yellow-500">Certifications</a>
          <a className="cursor-pointer hover:text-yellow-500">history</a>
        </nav> 
        <nav>
          <header className="footer-title">INFORMATION</header> 
          <p className="w-16 h-[3px] mb-3 bg-yellow-400"></p>
          <a className="cursor-pointer hover:text-yellow-500">Services</a>
          <a className="cursor-pointer hover:text-yellow-500">Blog</a>
          <a className="cursor-pointer hover:text-yellow-500">Contacts</a>
          <a className="cursor-pointer hover:text-yellow-500">Site Map</a>
          <a className="cursor-pointer hover:text-yellow-500">Privacy Policy</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <p className="w-16 h-[3px] mb-3 bg-yellow-400"></p>
          <a className="cursor-pointer hover:text-yellow-500">Terms of use</a>
          <a className="cursor-pointer hover:text-yellow-500">Privacy policy</a>
          <a className="cursor-pointer hover:text-yellow-500">Cookie policy</a>
        </nav>
  
      </footer>
    );
};

export default Footer;