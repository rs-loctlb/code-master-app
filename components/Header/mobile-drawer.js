import { Close, Menu } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from '../Drawer';
import data from '../../constant/navbar-data';

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    // <Drawer
    //   width="320px"
    //   drawerHandler={
    //     <div className="flex items-center justify-center shrink-0 w-[26px] cursor-pointer lg:hidden">
    //       <Menu />
    //     </div>
    //   }
    //   open={isDrawerOpen}
    //   toggleHandler={handleToggleDrawer}
    //   closeButton={<Close />}
    // >
    //   <Scrollbars>
    //     <div className="w-full h-full flex flex-col pt-[100px] pb-10 px-[30px]">
    //       <div className="w-full flex flex-col">
    //         {data.map(({ path, label }) => (
    //           <Link href="/" passHref key={label}>
    //             <a className="text-base font-medium py-[15px] cursor-pointer border-b border-solid border-[#e8e5e5] ease-out duration-300 hover:text-secondary active:text-secondary">
    //               {label}
    //             </a>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </Scrollbars>
    // </Drawer>
    <>
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="flex items-center justify-center shrink-0 w-[26px] cursor-pointer lg:hidden"
      >
        <Menu />
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        closeButton={<Close />}
      >
        <div className="w-full flex flex-col">
          {data.map(({ path, label }) => (
            <Link href="/" passHref key={label}>
              <a className="text-base font-medium py-[15px] cursor-pointer border-b border-solid border-[#e8e5e5] ease-out duration-300 hover:text-secondary active:text-secondary">
                {label}
              </a>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
