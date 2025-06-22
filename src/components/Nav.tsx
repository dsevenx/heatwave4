import React from 'react'
import {navLinks} from '../constants';
import Button from './Button';

const Nav = () => {

  return (
    <header className="ps-2 py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" >
        <img 
          src="/images/heatwave.png"
          alt="Heatwave Logo"
          className="h-16 hover:scale-125 transition-transform duration-300"
        />
      
        </a>
        <ul className="ps-2 pe-2 flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src="/icons/hamburger.svg"
            width={24}
            height={24}
          />
        </div>
    </nav>
    </header>
  )
}

export default Nav