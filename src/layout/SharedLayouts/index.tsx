import React, { useEffect, useMemo, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './SharedLayouts.module.css';
import Menu from '@/components/Menu';
import { useGetUserQuery } from '@/graphql/generated/graphql';
import { useAuthentication } from '@/hooks/authentication';
import { setTrails, Trail, TrailRoute } from '@/store/trails/slice';
import { userIdSelector } from '@/store/user/selectors';
import { setUser, setUserPosition } from '@/store/user/slice';
import { formatDateToLocalDate } from '@/utils/date';

const positionError = (error: { message: string }) => {
  console.log({ error });
};

const Authenticated: React.FC = ({ children }) => {
  const { canShowContent } = useAuthentication();
  const [hasGeolocation, setHasGeolocation] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);

  const { isFetched } = useGetUserQuery(
    {
      id: userId || '',
    },
    {
      enabled: !!userId,
      onSuccess: ({ user }) => {
        if (user) {
          dispatch(
            setUser({
              ...user,
              birthdate: formatDateToLocalDate(user.birthdate),
              name: user.name as string,
              sex: user.sex as string,
            })
          );

          if (user.trails) {
            const trails = user.trails.reduce<Trail[]>((pv, trail) => {
              if (trail) {
                const routes = trail.routes?.reduce<TrailRoute[]>(
                  (trailRoutes, trailRoute) => {
                    if (trailRoute) {
                      trailRoutes.push({
                        id: trailRoute.id,
                        routeId: trailRoute.route!.id,
                        finishedAt: trailRoute.finishedAt,
                        startedAt: trailRoute.created_at,
                      });
                    }

                    return trailRoutes;
                  },
                  []
                );

                pv.push({
                  id: trail.id,
                  finishedAt: trail.finishedAt,
                  modality: trail.modality,
                  inversePaths: trail.inversePaths,
                  startedAt: trail.startedAt,
                  routes: routes || [],
                  certificate:
                    trail.certificate && trail.certificate.file
                      ? {
                          file: trail.certificate.file,
                        }
                      : undefined,
                });
              }

              return pv;
            }, []);

            dispatch(setTrails(trails));
          }
        }
      },
    }
  );

  const watchPosition = useCallback(() => {
    navigator.geolocation.watchPosition(
      ({ coords }) => {
        setHasGeolocation(true);

        dispatch(
          setUserPosition({
            lat: coords.latitude,
            lon: coords.longitude,
          })
        );
      },
      positionError,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [dispatch]);

  useEffect(() => {
    watchPosition();
  }, [watchPosition]);

  if (!hasGeolocation) {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        <div className="bg-primary h-full p-6">
          <h1 className="text-center text-2xl text-white font-bold">
            Para utilizar o app é necessário habilitar a localização
          </h1>
          <button
            onClick={() => {
              navigator.geolocation.getCurrentPosition(
                watchPosition,
                positionError
              );
            }}
            className="btn btn-secondary mt-6"
          >
            Habilitar Localização
          </button>
        </div>
        <Menu />
      </div>
    );
  }

  return canShowContent && isFetched ? (
    <div className="flex flex-col h-full bg-gray-50">
      <div
        id="scroll-container"
        className="relative mb-[56px] flex-1 overflow-y-auto overflow-x-hidden max-w-lg mx-auto w-full"
      >
        {children}
      </div>
      <Menu />
    </div>
  ) : null;
};

const Public: React.FC = ({ children }) => (
  <div className={styles.publicLayoutContainer}>
    <div className="w-full h-full">{children}</div>
  </div>
);

const Clean: React.FC = ({ children }) => (
  <div className="w-full h-full">{children}</div>
);

const SharedLayouts: React.FC<{ type: 'authenticated' | 'public' | 'clean' }> =
  ({ children, type }) => {
    const LayoutComponent = useMemo(() => {
      if (type === 'authenticated') {
        return Authenticated;
      }

      if (type === 'clean') {
        return Clean;
      }

      return Public;
    }, [type]);

    return <LayoutComponent>{children}</LayoutComponent>;
  };

export default SharedLayouts;
