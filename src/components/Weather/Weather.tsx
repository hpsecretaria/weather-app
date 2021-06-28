import React from 'react';

import { Air, ArrowRightAlt, Cloud, LocationOn } from '@material-ui/icons';

import Card from '../Card';

import { City } from '../../common/types/city';
import { convertKelvinToCelcius } from '../../utils/temperature';

interface IProps {
  city: City;
}

export default function Weather({ city }: IProps): React.ReactElement {
  return (
    <Card className="flex flex-col items-center">
      <div className="flex mb-4 items-center">
        <h1 className="text-8xl text-orange">
          {Math.floor(convertKelvinToCelcius(city.weather.temperature.actual))}
        </h1>
        <div className="flex flex-col text-primary-300">
          <span className="text-2xl">&deg;C</span>
          <span>
            <ArrowRightAlt className="transform -rotate-90" />
            {Math.floor(convertKelvinToCelcius(city.weather.temperature.max))}
          </span>
          <span>
            <ArrowRightAlt className="transform rotate-90" />
            {Math.floor(convertKelvinToCelcius(city.weather.temperature.min))}
          </span>
        </div>
      </div>
      <h2 className="text-primary-300 mb-4">
        <LocationOn /> {`${city.name}, ${city.country}`}
      </h2>
      <div className="grid grid-cols-2 text-gray-500">
        <span>
          <Cloud /> {`${city.weather.clouds.all}%`}
        </span>
        <span>
          <Air /> {`${city.weather.wind.speed} m/s`}
        </span>
      </div>
    </Card>
  );
}
