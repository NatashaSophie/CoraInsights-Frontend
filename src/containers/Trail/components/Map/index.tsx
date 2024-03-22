import React, { useEffect, useState, useMemo } from 'react';

import classNames from 'classnames';
import { Map as MapLeaflet, Icon as LeafletIcon, Point } from 'leaflet';
import Link from 'next/link';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

import styles from './Map.module.css';
import Icon from '@/components/Icon';
import InterestPoint from '@/components/InterestPoint';
import Loading from '@/components/Loading';
import {
  useCreateTrailRouteMutation,
  useDeleteTrailRouteMutation,
  useUpdateTrailRouteMutation,
} from '@/graphql/generated/graphql';
import { kml } from '@/resources/kml';
import { routesSelector } from '@/store/routes/selectors';
import {
  InterestPoint as InterestPointProps,
  Route,
} from '@/store/routes/slice';
import {
  trailRoutesSelector,
  trailSelector,
  unfinishedTrailRouteSelector,
} from '@/store/trails/selectors';
import { userPositionSelector } from '@/store/user/selectors';
import { getDistanceFromLatLonInKm } from '@/utils/distance';

const iconFlag = new LeafletIcon({
  iconUrl: '/assets/map-pin.svg',
  iconRetinaUrl: '/assets/map-pin.svg',
  iconSize: new Point(40, 40),
  iconAnchor: new Point(20, 40),
  className: styles.flagMarker,
});

type MapProps = {
  show: boolean;
  route: Route;
  onCloseMap: () => void;
};

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

const Map: React.FC<MapProps> = ({ show, onCloseMap, route }) => {
  const userPosition = useSelector(userPositionSelector);
  const trail = useSelector(trailSelector);
  const routes = useSelector(routesSelector);
  const unfinishedTrailRoute = useSelector(unfinishedTrailRouteSelector);
  const trailRoutes = useSelector(trailRoutesSelector);
  const queryClient = useQueryClient();

  const [trailRouteStatus, setTrailRouteStatus] = useState<
    | 'canStartTrail'
    | 'canCancelTrail'
    | 'canFinishTrail'
    | 'finishedTrail'
    | null
  >(null);
  const [insterestPointIsOpen, setInsterestPointIsOpen] = useState(false);
  const [interestPoints, setInsterestPoints] = useState<InterestPointProps[]>(
    []
  );
  const [map, setMap] = useState<MapLeaflet | null>(null);
  const [mapIsLockedAtUserPosition, setMapIsLockedAtUserPosition] =
    useState(true);

  const trailRoute = useMemo(
    () => trailRoutes?.find((tr) => tr.routeId === route.id),
    [trailRoutes, route]
  );

  const createTrailRoute = useCreateTrailRouteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('getUser');
    },
  });

  const updateTrailRoute = useUpdateTrailRouteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('getUser');
    },
  });

  const deleteTrailRoute = useDeleteTrailRouteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('getUser');
    },
  });

  const nextTrailRoute = useMemo(
    () => routes.find((r) => r.fromCheckpoint.id === route.toCheckpoint.id),
    [route, routes]
  );

  const handleRouteButton = useMemo(() => {
    switch (trailRouteStatus) {
      case 'canCancelTrail':
        return (
          <button
            onClick={() =>
              deleteTrailRoute.mutate({
                trailRouteId: unfinishedTrailRoute!.id,
              })
            }
            type="button"
            className="mt-4 btn btn-primary bg-red-600"
          >
            <Loading isLoading={deleteTrailRoute.isLoading}>
              Cancelar percurso
            </Loading>
          </button>
        );
      case 'canStartTrail':
        return (
          <button
            type="button"
            onClick={() =>
              createTrailRoute.mutate({
                routeId: route.id,
                trailId: trail!.id,
              })
            }
            className="mt-4 btn btn-primary"
          >
            <Loading isLoading={createTrailRoute.isLoading}>
              Começar percurso
            </Loading>
          </button>
        );

      case 'canFinishTrail':
        return (
          <button
            type="button"
            onClick={() =>
              updateTrailRoute.mutate({
                trailRouteId: unfinishedTrailRoute!.id,
                finishedAt: new Date().toISOString(),
              })
            }
            className="mt-4 btn btn-primary bg-green-600"
          >
            <Loading isLoading={updateTrailRoute.isLoading}>
              Finalizar Percurso
            </Loading>
          </button>
        );

      case 'finishedTrail':
        return (
          <div className="flex flex-col items-center text-center">
            <Icon
              name="trophy"
              className="text-primary w-12 h-12 fill-current"
            />
            <p className="text-sm font-bold mt-4">{route.name}</p>
            {nextTrailRoute ? (
              <p className="text-sm mt-1">
                Parábens você completou o percurso
                <br />
                Continue para completar seu passaporte
              </p>
            ) : (
              <p className="text-sm mt-1">
                Parábens você completou o Caminho de Cora
              </p>
            )}
            <div className="flex gap-4 mt-2">
              <p className="flex">
                <Icon name="distance" className="stroke-current w-5 h-5" />
                <span>{route.distance}</span>
              </p>
              <p className="flex">
                <Icon name="clock" className="stroke-current w-5 h-5" />
                <span>{route.time}</span>
              </p>
            </div>
            {nextTrailRoute ? (
              <Link href={`/trilha/${nextTrailRoute.slug}`}>
                <a className="btn btn-primary mt-4">Próximo Percurso</a>
              </Link>
            ) : (
              <Link href={`/conquistas`}>
                <a className="btn btn-primary mt-4">Ver minha conquista</a>
              </Link>
            )}
          </div>
        );

      default:
        return null;
    }
  }, [
    trailRouteStatus,
    unfinishedTrailRoute,
    route,
    createTrailRoute,
    updateTrailRoute,
    deleteTrailRoute,
    trail,
    nextTrailRoute,
  ]);

  useEffect(() => {
    if (userPosition) {
      const distanceFromCheckpoint = getDistanceFromLatLonInKm(userPosition, {
        lat: route.fromCheckpoint.location.x,
        lon: route.fromCheckpoint.location.y,
      });

      const distanceToCheckpoint = getDistanceFromLatLonInKm(userPosition, {
        lat: route.toCheckpoint.location.x,
        lon: route.toCheckpoint.location.y,
      });

      setInsterestPoints(
        distanceToCheckpoint < distanceFromCheckpoint
          ? [...route.toCheckpoint.interestPoints]
          : [...route.fromCheckpoint.interestPoints]
      );
    }
  }, [userPosition, route]);

  useEffect(() => {
    if (userPosition) {
      if (unfinishedTrailRoute) {
        const distanceToCheckpoint = getDistanceFromLatLonInKm(userPosition, {
          lat: route.toCheckpoint.location.x,
          lon: route.toCheckpoint.location.y,
        });

        const distanceFromCheckpoint = getDistanceFromLatLonInKm(userPosition, {
          lat: route.fromCheckpoint.location.x,
          lon: route.fromCheckpoint.location.y,
        });

        if (
          route.id === unfinishedTrailRoute.routeId &&
          distanceToCheckpoint < 100
        ) {
          setTrailRouteStatus('canFinishTrail');
        } else if (distanceFromCheckpoint < 100) {
          setTrailRouteStatus('canCancelTrail');
        } else {
          setTrailRouteStatus(null);
        }
      } else if (trailRoute) {
        setTrailRouteStatus('finishedTrail');
      } else {
        const distanceFromCheckpoint = getDistanceFromLatLonInKm(userPosition, {
          lat: route.fromCheckpoint.location.x,
          lon: route.fromCheckpoint.location.y,
        });

        if (distanceFromCheckpoint < 100) {
          setTrailRouteStatus('canStartTrail');
        } else {
          setTrailRouteStatus(null);
        }
      }
    }
  }, [userPosition, route, unfinishedTrailRoute, trailRoute]);

  useEffect(() => {
    if (map && userPosition && mapIsLockedAtUserPosition) {
      map.setView([userPosition.lat, userPosition.lon], 20);
    }
  }, [map, mapIsLockedAtUserPosition, userPosition]);

  useEffect(() => {
    const onDrag = () => {
      setMapIsLockedAtUserPosition(false);
    };

    if (map && mapIsLockedAtUserPosition) {
      map.on('dragend', onDrag);
    }

    return () => {
      if (map && mapIsLockedAtUserPosition) {
        map.removeEventListener('dragend', onDrag);
      }
    };
  }, [map, mapIsLockedAtUserPosition]);

  return userPosition ? (
    <div
      className={classNames(styles.container, {
        [styles.showMap!]: show,
        [styles.hideMap!]: !show,
      })}
    >
      <MapContainer
        center={[
          route.fromCheckpoint.location.x,
          route.fromCheckpoint.location.y,
        ]}
        style={{ width: '100%', height: '100%' }}
        minZoom={10}
        zoom={20}
        whenCreated={setMap}
        zoomControl={false}
      >
        <CustomTileLayer />
        <ReactLeafletKml kml={kml} />

        {userPosition && (
          <Circle
            className={styles.userPositionMarker}
            center={[userPosition.lat, userPosition.lon]}
            fillOpacity={1}
            fillColor="#3388ff"
            radius={6}
          />
        )}

        <Marker
          icon={iconFlag}
          position={[
            route.fromCheckpoint.location.x,
            route.fromCheckpoint.location.y,
          ]}
        >
          <Popup>{route.fromCheckpoint.name}</Popup>
        </Marker>

        <Marker
          icon={iconFlag}
          position={[
            route.toCheckpoint.location.x,
            route.toCheckpoint.location.y,
          ]}
        >
          <Popup>{route.toCheckpoint.name}</Popup>
        </Marker>
      </MapContainer>
      <div className={styles.topInfo}>
        {trailRouteStatus !== 'finishedTrail' && (
          <button type="button" onClick={onCloseMap}>
            <p className="text-sm text- leading-5 font-bold">
              {route.fromCheckpoint.name} até {route.toCheckpoint.name}
            </p>
            <div className="text-gray-500 flex gap-4 mt-2">
              <p>
                <Icon name="distance" className="stroke-current w-5 h-5" />
                <span>{route.distance}</span>
              </p>
              <p>
                <Icon name="clock" className="stroke-current w-5 h-5" />
                <span>{route.time}</span>
              </p>
              <p>
                <Icon name="powerLevel" className="stroke-current w-5 h-5" />
                <span>{route.difficulty}</span>
              </p>
            </div>
          </button>
        )}
        <div className="w-full">{handleRouteButton}</div>
      </div>
      <button
        className={styles.centralizeButton}
        onClick={() => setMapIsLockedAtUserPosition(true)}
      >
        <Icon name="crosshair" className="stroke-current text-primary" />
      </button>

      <button
        className={styles.checkpointButton}
        onClick={() => {
          if (map) {
            map.setView(
              [route.toCheckpoint.location.x, route.toCheckpoint.location.y],
              20
            );
          }
        }}
      >
        <Icon name="flag" className="fill-current text-white" />
      </button>
      <div
        className={classNames(styles.interestPoints, {
          [styles.isOpen!]: insterestPointIsOpen,
        })}
      >
        <button
          type="button"
          onClick={() => setInsterestPointIsOpen((v) => !v)}
        >
          Pontos de interesse
        </button>
        <ul className="w-full h-full max-h-full overflow-auto pb-6">
          {interestPoints.map((interestPoint) => (
            <InterestPoint {...interestPoint} key={interestPoint.id} />
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default Map;
