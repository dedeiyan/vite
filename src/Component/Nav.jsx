import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa'
import {CiMenuBurger} from 'react-icons/ci'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => 
    setClick(!click);
  
const content = <>
                <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-primaryGreen transition'>
                  <ul className='text-center text-xl p-20'>
                      <Link  spy={true} smooth={true} to="Home">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
                      </Link>
                      <Link  spy={true} smooth={true} to="About">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
                      </Link>
                      <Link  spy={true} smooth={true} to="Service">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Service</li>
                      </Link>
                      <Link spy={true} smooth={true}  to="Project">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Project</li>
                      </Link>
                      <Link spy={true} smooth={true}  to="Contact">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
                      </Link>
                  </ul>
                </div>
                </>
return (
    <nav className='bg-primaryGreen'>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
        <div className='flex items-center flex-1'>
          
          <span className=''> <Link to='Home'><img src="/text.png" alt="" style={{ width: '100px', height: 'auto' }} /></Link></span>
        
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link spy={true} smooth={true} to='Home'>
                <li className='hover:text-primaryRed transition hover:border-primaryRed cursor-pointer'>Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className='hover:text-primaryRed transition hover:border-primaryRed cursor-pointer'>About</li>
              </Link>
              <Link spy={true} smooth={true} to="Service">
                <li className='hover:text-primaryRed transition hover:border-primaryRed cursor-pointer'>Service</li>
              </Link>
              <Link spy={true} smooth={true} to="Project">
                <li className='hover:text-primaryRed transition hover:border-primaryRed cursor-pointer'>Project</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className='hover:text-primaryRed transition hover:border-primaryRed cursor-pointer'>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition ' onClick={handleClick}>
          {click? <FaTimes/> : <CiMenuBurger/>}
        </button>
      </div>
    </nav>
  );
};

export default Nav;