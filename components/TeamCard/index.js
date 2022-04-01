import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard = ({ src, altText, title, designation, socials }) => {
  return (
    <div className="group flex items-center flex-col py-0 md:py-5 2md:py-[25px] lg:py-[30px] px-[10px] md:px-[30px] 2md:px-[50px] ease-out duration-300 rounded-lg relative md:hover:shadow-card-shadow hover:text-primary">
      <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] xl:w-[130px] xl:h-[130px] flex">
        <Image
          src={src}
          alt={altText}
          className="shrink-0 border-2 border-solid border-primary rounded-full"
        />
      </div>
      <div className="w-full text-center mt-[15px] md:mt-5 cursor-default">
        <h3 className="text-[12px] sm:text-[15px] md:text-[16px] xl:text-[20px] font-bold leading-tight sm:leading-snug ease-out duration-300 mb-[5px] ">
          {title}
        </h3>
        <p className="text-[14px] 2md:text-[16px] font-normal leading-normal text-main ease-out duration-300 group-hover:text-primary">
          {designation}
        </p>
      </div>
      <div className="relative md:absolute right-0 md:right-6 lg:right-5 xl:right-6 bottom-0 md:bottom-[18px] lg:bottom-[25px] w-full md:w-auto flex flex-row md:flex-col items-center justify-center ease-out duration-300 opacity-100 md:opacity-0 pt-[10px] group-hover:opacity-100">
        {socials.map(({ id, path, icon }) => (
          <Link href={path} key={id}>
            <a className="text-[12px] sm:text-[15px] 2md:text-base text-main md:text-primary leading-[1em] my-0 md:my-[-2px] px-[5px] ease-out duration-300 group-hover:text-primary md:hover:text-main group-hover:my-0 group-hover:py-0 md:group-hover:py-[5px]">
              {icon}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
