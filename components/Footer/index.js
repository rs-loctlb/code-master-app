import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import data from '../../constant/navbar-data';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-t-[1px] border-solid border-border flex pt-[50px] md:pt-[80px] pb-10 md:pb-[100px] text-center flex-col">
          <Logo className="justify-center" />
          <div className="mt-[15px] md:mt-5 mb-[10px]">
            <nav className="flex items-center justify-center flex-wrap">
              {data.map(({ path, label }) => (
                <Link href="/" key={label}>
                  {/* add Path to href Link */}
                  <a className="text-base px-5 leading-tight ease-linear duration-150 hover:text-primary">
                    {label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],

// fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],

// sm: '480px',
//       md: '640px',
//       '2md': '768px',
//       lg: '1024px',
//       xl: '1220px',
//       '3xl': '1366px',
//       '4xl': '1620px',
