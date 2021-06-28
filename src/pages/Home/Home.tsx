import React from 'react';

import Weather from '../../components/Weather';
import { useGetCity } from '../../hooks/city/useGetCity';

export default function Home(): React.ReactElement {
  const city = useGetCity('Davao City');

  if (city === undefined) {
    return <h1 className="mx-auto flex-grow flex items-center text-gray-700">Loading...</h1>;
  }

  return (
    <div className="xl:container flex flex-col flex-grow mx-auto items-center justify-center">
      <div className="flex">
        <Weather city={city} />
      </div>
    </div>
  );
}
