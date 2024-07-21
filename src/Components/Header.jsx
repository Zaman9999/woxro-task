import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const Header = () => {
  return (
    <header className="flex justify-end p-6 md:p-8 xl:p-12 bg-black border-b-0">
      <RxCross1 className="text-2xl md:text-3xl xl:text-4xl text-white" />
    </header>
  );
};

export default Header;
