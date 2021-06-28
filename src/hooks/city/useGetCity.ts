import { gql, useQuery } from '@apollo/client';

import { City } from '../../common/types/city';

const GET_CITY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

export const useGetCity = (name: string): City | undefined => {
  const { data } = useQuery(GET_CITY, {
    variables: { name: name },
  });
  return data?.getCityByName;
};
