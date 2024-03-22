import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TrailForm from '../forms/TrailForm';
import RouteItem from './components/RouteItem';
import { useGetRoutesQuery } from '@/graphql/generated/graphql';
import { routesSelector } from '@/store/routes/selectors';
import { Route, setRoutes, InterestPoint } from '@/store/routes/slice';
import {
  hasSomeTrailSelector,
  trailIsInverseSelector,
} from '@/store/trails/selectors';
import { Image } from '@/types';
import {
  formatRouteDifficulty,
  formatRouteDistance,
  formatRouteTime,
} from '@/utils/format';

const Trails: React.FC = () => {
  const dispatch = useDispatch();
  const hasSomeTrail = useSelector(hasSomeTrailSelector);
  const routes = useSelector(routesSelector);
  const trailInverse = useSelector(trailIsInverseSelector);

  useGetRoutesQuery(
    {},
    {
      onSuccess: ({ trailParts }) => {
        const newRoutes = trailParts?.reduce<Route[]>((acc, trailPart) => {
          if (trailPart) {
            const toCheckpointInterestPoints =
              trailPart.toCheckpoint?.estabelecimentos?.reduce<InterestPoint[]>(
                (accInterestPoint, interestPoint) => {
                  if (interestPoint) {
                    accInterestPoint.push({
                      ...interestPoint,
                      address: interestPoint.address || undefined,
                      email: interestPoint.email || undefined,
                      phone: interestPoint.phone || undefined,
                      location: interestPoint.location || {
                        x: 0,
                        y: 0,
                      },
                    });
                  }
                  return accInterestPoint;
                },
                []
              );

            const fromCheckpointInterestPoints =
              trailPart.fromCheckpoint?.estabelecimentos?.reduce<
                InterestPoint[]
              >((accInterestPoint, interestPoint) => {
                if (interestPoint) {
                  accInterestPoint.push({
                    ...interestPoint,
                    address: interestPoint.address || undefined,
                    email: interestPoint.email || undefined,
                    phone: interestPoint.phone || undefined,
                    location: interestPoint.location || {
                      x: 0,
                      y: 0,
                    },
                  });
                }
                return accInterestPoint;
              }, []);

            acc.push({
              ...trailPart,
              toCheckpoint: {
                id: trailPart.toCheckpoint?.id || '',
                name: trailPart.toCheckpoint?.name || '',
                location: trailPart.toCheckpoint?.location || {
                  x: 0,
                  y: 0,
                },
                interestPoints: toCheckpointInterestPoints || [],
              },
              fromCheckpoint: {
                id: trailPart.fromCheckpoint?.id || '',
                name: trailPart.fromCheckpoint?.name || '',
                location: trailPart.fromCheckpoint?.location || {
                  x: 0,
                  y: 0,
                },
                interestPoints: fromCheckpointInterestPoints || [],
              },
              difficulty: formatRouteDifficulty(trailPart.difficulty),
              time: formatRouteTime(trailPart.time),
              distance: formatRouteDistance(trailPart.distance),
              coverImage: trailPart.coverImage as Image,
              images: trailPart.images as Image[],
            });
          }

          return acc;
        }, []);

        if (newRoutes) {
          dispatch(setRoutes(trailInverse ? newRoutes.reverse() : newRoutes));
        }
      },
    }
  );

  return hasSomeTrail ? (
    <div className="flex flex-col mt-6 gap-4 pb-6">
      {routes.map((route) => (
        <RouteItem key={route.id} {...route} />
      ))}
    </div>
  ) : (
    <TrailForm />
  );
};

export default Trails;
