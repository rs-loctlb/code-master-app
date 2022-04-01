import React from 'react';

const InputField = ({ name, type, Icon }) => {
  return (
    <div className="flex items-center bg-white-ff w-72 sm:w-[70%] h-[56px] rounded border-[1px] border-solid border-border relative mb-4">
      <div className="flex items-center justify-center text-main absolute pl-3">
        <Icon color="inherit" />
      </div>
      <input
        type={type}
        required
        placeholder={name}
        name={name.toLowerCase()}
        className="outline-none focus:outline-none active:outline-none pl-11 pr-5 w-full bg-[transparent] text-base font-medium absolute h-full  focus:shadow-card-shadow"
      />
    </div>
  );
};

export default InputField;
