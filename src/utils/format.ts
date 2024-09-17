import { RouteDifficulty } from '@/store/routes/slice';

import { DIFFICULTY_TRANSLATION } from './translations';

export const formatRouteDistance = (distance: number) =>
  `${distance.toString().replace('.', ',')} km`;

export const formatRouteTime = (time: string) => {
  const [hour, min] = time?.split(':');

  return `${Number(hour)}${Number(min) ? `,${Number(min)}` : ''} h`;
};

export const formatRouteDifficulty = (difficulty: RouteDifficulty) =>
  DIFFICULTY_TRANSLATION[difficulty];
