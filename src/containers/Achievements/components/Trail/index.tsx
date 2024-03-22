import React, { useState, useMemo } from 'react';

import classNames from 'classnames';
import { differenceInMinutes } from 'date-fns';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import styles from './Trail.module.css';
import Icon from '@/components/Icon';
import { routesSelector } from '@/store/routes/selectors';
import { Trail as TrailProps, TrailRoute } from '@/store/trails/slice';

const getSpededTime = (trailRoute: TrailRoute) => {
  const startedDate = new Date(trailRoute.startedAt);
  const finishedDate = new Date(trailRoute.finishedAt);

  const routesSpendedTimeInMinutes = differenceInMinutes(
    finishedDate,
    startedDate
  );

  let restMinutes = routesSpendedTimeInMinutes;
  const day = Math.floor(restMinutes / 1440);
  restMinutes %= 1440;
  const hours = Math.floor(restMinutes / 60);
  restMinutes %= 60;
  const minutes = Math.floor(restMinutes);

  return `${day ? `${day} d` : ''}${
    hours || day ? ` ${hours} h` : ''
  }${minutes} min`;
};

const Trail: React.FC<TrailProps> = (trail) => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = useSelector(routesSelector);

  const percentCompleted = useMemo(
    () => ((trail.routes?.length || 0 - routes.length) / routes.length) * 100,
    [trail, routes]
  );

  const distanceTraveled = useMemo(() => {
    const routesDistance = trail.routes?.reduce((acc, el) => {
      if (el.finishedAt) {
        const route = routes.find((r) => r.id === el.routeId);

        if (route) {
          const distance = Number(
            route.distance.split(' ')[0]?.replace(',', '.')
          );

          return acc + distance;
        }
      }

      return acc;
    }, 0);

    return routesDistance.toString().replace('.', ',');
  }, [trail, routes]);

  const spendedTime = useMemo(() => {
    const routesSpendedTimeInMinutes = trail.routes?.reduce((acc, el) => {
      if (el.finishedAt) {
        const route = routes.find((r) => r.id === el.routeId);

        if (route) {
          const startedDate = new Date(el.startedAt);
          const finishedDate = new Date(el.finishedAt);

          const difference = differenceInMinutes(finishedDate, startedDate);

          return acc + difference;
        }
      }

      return acc;
    }, 0);

    let restMinutes = routesSpendedTimeInMinutes;
    const day = Math.floor(restMinutes / 1440);
    restMinutes %= 1440;
    const hours = Math.floor(restMinutes / 60);
    restMinutes %= 60;
    const minutes = Math.floor(restMinutes);

    return `${day ? `${day} d` : ''}${
      hours || day ? ` ${hours} h` : ''
    }${minutes} min`;
  }, [trail, routes]);

  return (
    <div className={styles.container}>
      <div className="flex items-center p-4 bg-white">
        <div className="flex-1">
          <h1 className="text-lg leading-7 font-medium">
            Caminho de Cora Coralina
          </h1>
          <p className="mt-2 text-xs leading-4">
            {percentCompleted === 100 ? '' : 'Em andamento'}
          </p>
        </div>
        {isOpen ? (
          <div>
            <p className="text-gray-500 font-bold">
              {percentCompleted > 0 ? percentCompleted : 0}%
            </p>
          </div>
        ) : (
          <Icon name={percentCompleted === 100 ? 'trophy3' : 'trophy2'} />
        )}
      </div>
      <div
        className={classNames(
          'bg-white transition-all duration-500 overflow-hidden flex flex-col',
          {
            'max-h-0': !isOpen,
            'max-h-screen': isOpen,
          }
        )}
      >
        <div className="mx-4 border mb-4">
          {routes.map((route) => {
            const trailRoute = trail.routes.find(
              (tr) => tr.routeId === route.id
            );

            const routeIsFinished = !!trailRoute?.finishedAt;
            return (
              <Link key={route.id} href={`trilha/${route.slug}`}>
                <a className="bg-white text-black border-solid border-b last:border-b-0 flex items-center p-4">
                  <div className="mr-2 flex-1">
                    <p className="text-sm leading-5 font-bold">{route.name}</p>
                    {trailRoute && routeIsFinished && (
                      <div className={`${styles.infoContainer} mt-2`}>
                        <p>
                          <Icon name="clock" className="stroke-current" />
                          <span>{getSpededTime(trailRoute)}</span>
                        </p>
                        <p>
                          <Icon name="distance" className="stroke-current" />
                          <span>{route.distance}</span>
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <Icon name={routeIsFinished ? 'trophy3' : 'trophy2'} />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        {trail.certificate && (
          <div className="w-full px-4 mb-4 flex">
            <a
              download="Certificado Caminho de Cora"
              href={`data:application/pdf;base64,${trail.certificate.file}`}
              className="btn btn-primary w-full flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                name="download"
                className="stroke-current text-white mr-2"
              />
              <p>Baixar certificado</p>
            </a>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="bg-gray-100 p-4"
      >
        <div className={styles.infoContainer}>
          <p>
            <Icon name="clock" className="stroke-current" />
            <span>{spendedTime}</span>
          </p>
          <p>
            <Icon name="distance" className="stroke-current" />
            <span>{distanceTraveled} km</span>
          </p>
          <div className="ml-auto">
            <Icon
              name="chevronLeft"
              className={classNames(
                'w-6 transition-all h-6 stroke-current transform',
                {
                  '-rotate-90': !isOpen,
                  'rotate-90': isOpen,
                }
              )}
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Trail;
