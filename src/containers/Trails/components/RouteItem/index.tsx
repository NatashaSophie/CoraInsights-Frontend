import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/Icon';
import { Route } from '@/store/routes/slice';

import styles from './RouteItem.module.css';

const RouteItem: React.FC<Route> = ({
  name,
  difficulty,
  distance,
  time,
  fromCheckpoint,
  toCheckpoint,
  coverImage,
  slug,
}) => {
  return (
    <Link href={`/trilha/${slug}`}>
      <a className={styles.container}>
        <div className={styles.imageSection}>
          <Image layout="fill" alt="Cover image" src={coverImage.url} />

          <p>{name}</p>
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
        <div className={styles.infos}>
          <div>
            <Icon name="powerLevel" className="stroke-current" />
            <p>{difficulty}</p>
          </div>
          <div>
            <Icon name="clock" className="stroke-current" />
            <p>{time}</p>
          </div>
          <div>
            <Icon name="distance" className="stroke-current" />
            <p>{distance}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RouteItem;
