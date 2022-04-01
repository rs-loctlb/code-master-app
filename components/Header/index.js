import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import MobileDrawer from './mobile-drawer';
import data from '../../constant/navbar-data';

const Header = () => {
  return (
    <header className="text-main font-normal py-5 w-full shadow-md" id="header">
      <div className="container flex items-center justify-between">
        <Logo />
        <nav className="mx-auto hidden lg:flex">
          {data.map(({ path, label }) => (
            <Link href="/" key={label}>
              {/* add Path to href Link */}
              <a className="text-base px-5 leading-tight ease-linear duration-150 hover:text-primary">
                {label}
              </a>
            </Link>
          ))}
        </nav>
        <Link href="/">
          <a className="button-secondary font-medium shrink-0 mr-[15px] sm:mr-5 lg:mr-0 ml-auto xl:ml-0">
            Login Now
          </a>
        </Link>
        <MobileDrawer />
      </div>
    </header>
  );
};

export default Header;
