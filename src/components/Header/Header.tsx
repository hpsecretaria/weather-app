import { WbSunny } from '@material-ui/icons';
import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Header(): React.ReactElement {
  return (
    <header className="w-full flex self-center bg-gray-100 bg-opacity-50 shadow">
      <div className="flex xl:container mx-auto py-4">
        <NavLink
          to="/"
          className="flex items-center text-4xl cursor-pointer mr-auto text-primary-300"
        >
          <WbSunny className="mr-4 text-orange" fontSize="inherit" />
          Davao Weather
        </NavLink>

        <NavLink to="/" className="flex items-center text-4xl cursor-pointer text-gray-500 ml-auto">
          Home
        </NavLink>
      </div>
    </header>
  );
}
