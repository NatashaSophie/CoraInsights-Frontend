import { Location } from '@/types';

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

export const getDistanceFromLatLonInKm = (
  position1: Location,
  position2: Location
): number => {
  const R = 6371;
  const dLat = deg2rad(position2.lat - position1.lat);
  const dLng = deg2rad(position2.lon - position1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(position1.lat)) *
      Math.cos(deg2rad(position1.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Number((R * c * 1000).toFixed());
};
