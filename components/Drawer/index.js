// import React from 'react';
// import RcDrawer from 'rc-drawer';

// const Drawer = ({
//   className,
//   children,
//   closeButton,
//   closeButtonStyle,
//   drawerHandler,
//   toggleHandler,
//   open,
//   width,
//   placement,
//   ...props
// }) => {
//   return (
//     <>
//       <RcDrawer
//         open={open}
//         onClose={toggleHandler}
//         className="drawer"
//         width={width}
//         placement={placement}
//         handler={false}
//         level={null}
//         duration={'0.4s'}
//         {...props}
//       >
//         {closeButton && (
//           <div
//             className="flex items-center justify-center absolute top-[25px] right-[30px] z-10 cursor-pointer"
//             onClick={toggleHandler}
//           >
//             {closeButton}
//           </div>
//         )}
//         <div className="w-full h-full bg-slate-500">{children}</div>
//       </RcDrawer>
//       <div onClick={toggleHandler} className="drawer__handler inline-block">
//         {drawerHandler}
//       </div>
//     </>
//   );
// };

// export default Drawer;

// Drawer.defaultProps = {
//   width: '320px',
//   placement: 'left',
// };

import React from 'react';

const Drawer = ({ isOpen, setIsOpen, children, closeButton }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-400 translate-x-0  '
          : ' transition-all delay-200 opacity-0 translate-x-full  ')
      }
    >
      <div
        className={
          ' w-[320px] right-0 absolute bg-white-ff h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative max-w-lg pb-10 pt-[100px] px-[30px] w-full flex flex-col space-y-6 overflow-y-scroll h-full">
          {closeButton && (
            <button
              className="absolute top-[25px] left-[30px] font-bold"
              onClick={handleClose}
            >
              {closeButton}
            </button>
          )}
          {children}
        </article>
      </div>
      <div
        className={`w-screen h-full cursor-pointer bg-main/50 duration-400 ease-linear ${
          isOpen ? 'opacity-100 visible' : 'opacity-100 invisible'
        }`}
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default Drawer;
