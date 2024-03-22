import axios from 'axios';

import { Location } from '@/types';

export const getDistanceFrom = async (locations: Location[]) => {
  const { data } = await axios.post<{
    distance: [number];
  }>(
    'https://www.mapquestapi.com/directions/v2/routematrix?key=w06RFDWquULmG5TkCcY14HCb2FvHORGd',
    {
      locations: locations.map((location) => ({
        latLng: {
          lat: location.lat,
          lng: location.lon,
        },
      })),
    }
  );

  return data.distance.map((cityDistance) =>
    Math.round(cityDistance * 1.60934)
  );
};
