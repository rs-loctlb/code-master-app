import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Logo from '../components/Logo';
import dataIcons from '../constant/redirect-icon-data';
import { MailOutline, Lock } from '@mui/icons-material';
import InputField from '../components/InputField';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-2 bg-border">
      <Head>
        <meta name="login" content="login page" />
        <title>Rising Stars Login</title>
      </Head>
      <main className="container">
        <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
          <div className="rounded-2xl shadow-2xl flex w-full max-w-4xl">
            <div className=" p-5 bg-background-secondary rounded-tl-2xl rounded-bl-2xl w-full lg:w-3/5 rounded-tr-2xl rounded-br-2xl lg:rounded-tr-none lg:rounded-br-none">
              <div className="text-left font-bold">
                <Logo className="text-2xl" logoSize={40} />
              </div>
              <form className="py-10">
                <h2 className=" text-3xl font-bold mb-2 text-main">Login</h2>
                <div className="border-[1px] w-10 border-main inline-block mb-2"></div>
                <div className="flex items-center my-2 justify-center gap-x-4">
                  {dataIcons.map(({ icon }, idx) => (
                    <button
                      key={idx}
                      className="border-2 border-border rounded-full p-3 hover:shadow-card-shadow ease-in-out duration-300 "
                    >
                      {icon}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col items-center mt-10">
                  <InputField Icon={MailOutline} type="email" name="Email" />
                  <InputField Icon={Lock} type="password" name="Password" />
                </div>
                <button className="button-primary px-10 mt-4">Sign In</button>
              </form>
              <Link href="/signup" passHref>
                <a className="lg:hidden">
                  Don{"'"}t have an account?{' '}
                  <span className="font-bold">Register</span>
                </a>
              </Link>
            </div>
            <div className="w-2/5 bg-primary text-white-ff rounded-tr-2xl rounded-br-2xl py-48 px-12 flex-col items-center hidden lg:flex">
              <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
              <div className="border-[1px] w-20 border-white-ff inline-block mb-2"></div>
              <p className="mb-2">
                Fill up personal information and start journey with us.
              </p>
              <Link href="/signup" passHref>
                <a className="button text-white-ff border-white-ff border-2 border-solid mt-4 px-10 hover:shadow-2xl hover:bg-white-ff hover:text-primary ease-in-out duration-300">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
