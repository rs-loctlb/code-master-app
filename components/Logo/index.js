import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/android-chrome-512x512.png';
import cn from 'classnames';

const Logo = ({ className }) => {
  return (
    <Link href="/" passHref>
      <a className={cn('flex items-center space-x-1.5', className)}>
        <Image src={logo} alt="logo" width={56} height={56} />
        <span className="text-2xl text-primary font-bold hidden sm:inline-block">
          Rising Stars
        </span>
      </a>
    </Link>
  );
};

export default Logo;
