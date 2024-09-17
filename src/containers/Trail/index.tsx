import React, { useState } from 'react';

import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import Icon from '@/components/Icon';
import { Route } from '@/store/routes/slice';

import styles from './Trail.module.css';

const Map: any = dynamic(() => import('./components/Map'), {
  ssr: false,
});

const Trail: React.FC<Route> = (route) => {
  const {
    distance,
    time,
    difficulty,
    name,
    fromCheckpoint,
    toCheckpoint,
    description,
    images,
  } = route;
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <Map onCloseMap={() => setShowMap(false)} show={showMap} route={route} />
      <div
        className={classNames(styles.container, {
          hidden: showMap,
          flex: !showMap,
        })}
      >
        <div className={styles.infoSection}>
          <div className="mr-2">
            <h1 className="font-bold leading-6">{name}</h1>
            <div className="text-gray-500 flex gap-4 mt-2">
              <p>
                <Icon name="distance" className="stroke-current w-5 h-5" />
                <span>{distance}</span>
              </p>
              <p>
                <Icon name="clock" className="stroke-current w-5 h-5" />
                <span>{time}</span>
              </p>
              <p>
                <Icon name="powerLevel" className="stroke-current w-5 h-5" />
                <span>{difficulty}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowMap(true)}
            className="ml-auto btn btn-primary rounded-2xl flex justify-center items-center self-start w-auto px-3"
          >
            <Icon name="map" className="text-white stroke-current" />
          </button>
        </div>
        <div className={styles.middleSection}>
          <div>
            <Icon name="pin" className="stroke-current" />
            <p>{fromCheckpoint.name}</p>
          </div>
          <div>
            <Icon name="squarePin" className="stroke-current" />
            <p>{toCheckpoint.name}</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Descrição</h2>
          <p className="text-xs leading-4 mt-4">{description}</p>
        </div>
        <div>
          <h2 className="font-bold">Imagens</h2>
          <ul className={styles.imagesContainer}>
            {images.map((image) => (
              <li key={image.url}>
                <Image
                  alt="image"
                  src={image.url}
                  width={112}
                  objectFit="cover"
                  height={112}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Trail;
