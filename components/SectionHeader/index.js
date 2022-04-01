import React from 'react';

const SectionHeader = ({ slogan, title, isWhite }) => {
  return (
    <div className="w-full md:w-[540px] flex flex-col items-center -mt-[3px] md:mt-[-5px] mb-[50px] md:mb-[60px] xl:mb-[65px] 4xl:mb-[80px] mx-auto">
      <p
        className={`${
          isWhite ? 'text-white-ff opacity-70' : 'text-primary opacity-100'
        } text-[13px] 2md:text-[14px] text-primary text-center tracking-[1.5px] md:tracking-[2px] uppercase font-bold mb-[10px] leading-normal`}
      >
        {slogan}
      </p>
      <h2
        className={`${
          isWhite ? 'text-white-ff' : 'text-heading'
        } text-[24px] md:text-[28px] xl:text-[32px] 4xl:text-[36px] text-heading leading-tight`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
