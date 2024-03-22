import React, { useState, useCallback, useEffect } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import UserAvatar from '@/components/UserAvatar';
import { cities } from '@/containers/forms/TrailForm';
import {
  Enum_Trails_Modality,
  UploadMutation,
  useUpdateTrailMutation,
  useUpdateUserMutation,
} from '@/graphql/generated/graphql';
import { getDistanceFrom } from '@/services/mapQuest';
import { trailSelector } from '@/store/trails/selectors';
import { userPositionSelector, userSelector } from '@/store/user/selectors';
import { resetUser } from '@/store/user/slice';

const Perfil = () => {
  const user = useSelector(userSelector);
  const queryClient = useQueryClient();
  const userMutation = useUpdateUserMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('getUser');
    },
  });
  const trailMutation = useUpdateTrailMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('getUser');
    },
  });

  const [citiesDistance, setCitiesDistance] = useState<number[]>([]);
  const userCurrentPosition = useSelector(userPositionSelector);
  const dispatch = useDispatch();
  const trail = useSelector(trailSelector);
  const [activeCity, setActiveCity] = useState(trail?.inversePaths ? 1 : 0);
  const [activeModality, setActiveModality] = useState<'bike' | 'foot'>(
    trail?.modality || 'bike'
  );

  const getCitiesDistances = useCallback(async (userPosition) => {
    const distance = await getDistanceFrom([
      userPosition,
      ...cities.map((city) => city.coordinates),
    ]);

    setCitiesDistance(distance);
  }, []);

  const handleChangeAvatar = useCallback(
    (avatar: UploadMutation) => {
      if (user.id) {
        userMutation.mutate({
          userId: user.id,
          avatar: avatar.upload.id,
        });
      }
    },
    [userMutation, user]
  );

  useEffect(() => {
    if (userCurrentPosition) {
      getCitiesDistances(userCurrentPosition);
    }
  }, [userCurrentPosition, getCitiesDistances]);

  useEffect(() => {
    const inversePath = activeCity > 0;

    if (trail) {
      if (
        trail?.modality !== activeModality ||
        trail.inversePaths !== inversePath
      ) {
        trailMutation.mutate({
          trailId: trail?.id,
          inversePath: activeCity > 0,
          modality:
            activeModality === 'bike'
              ? Enum_Trails_Modality.Bike
              : Enum_Trails_Modality.Foot,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModality, activeCity, trail]);

  return (
    <Main
      meta={
        <Meta
          title="Perfil | Caminho de Cora"
          description="Caminho de Cora Coralina"
        />
      }
    >
      <div className="flex h-full flex-col items-center justify-between relative p-6">
        <div>
          <UserAvatar onUploadNewAvatar={handleChangeAvatar} />
          <h1 className="text-center font-bold mt-4">{user.name}</h1>
        </div>
        <div className="w-full">
          <div className="w-full">
            <p className="text-center font-bold">Cidade inicial da trilha</p>
            <div className="flex gap-2 mt-4 w-full">
              {cities.map((city, index) => (
                <button
                  type="button"
                  onClick={() => setActiveCity(index)}
                  className={classNames(
                    'text-center flex flex-col items-center w-full p-5 rounded-lg shadow-lg border border-transparent',
                    {
                      'border-primary': activeCity === index,
                    }
                  )}
                  key={city.name}
                >
                  <p className="text-xs leading-4 font-semibold">{city.name}</p>
                  <div className="flex items-center mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.49991 2.98657C7.99623 2.98657 7.50386 3.13593 7.08506 3.41576C6.66627 3.69559 6.33985 4.09333 6.1471 4.55867C5.95435 5.02401 5.90392 5.53606 6.00218 6.03007C6.10045 6.52407 6.34299 6.97785 6.69915 7.334C7.05531 7.69016 7.50908 7.93271 8.00308 8.03097C8.49709 8.12924 9.00914 8.0788 9.47448 7.88605C9.93982 7.6933 10.3376 7.36689 10.6174 6.94809C10.8972 6.52929 11.0466 6.03692 11.0466 5.53324C11.0466 4.85782 10.7783 4.21007 10.3007 3.73247C9.82309 3.25488 9.17533 2.98657 8.49991 2.98657V2.98657ZM8.49991 7.19102C8.17204 7.19102 7.85152 7.09379 7.5789 6.91163C7.30628 6.72947 7.0938 6.47056 6.96833 6.16764C6.84285 5.86472 6.81003 5.5314 6.87399 5.20982C6.93796 4.88825 7.09584 4.59286 7.32769 4.36101C7.55953 4.12917 7.85492 3.97128 8.1765 3.90731C8.49808 3.84335 8.8314 3.87618 9.13432 4.00165C9.43724 4.12713 9.69615 4.33961 9.87831 4.61223C10.0605 4.88485 10.1577 5.20536 10.1577 5.53324C10.1565 5.97214 9.98134 6.39266 9.67057 6.70259C9.35981 7.01253 8.93882 7.18657 8.49991 7.18657V7.19102Z"
                        fill="#6B7280"
                      />
                      <path
                        d="M8.50008 0.888916C7.11573 0.890072 5.78808 1.439 4.80711 2.4158C3.82614 3.39261 3.27157 4.71791 3.26453 6.10225C3.26453 8.17781 4.42897 9.91558 5.2823 11.1823L5.43786 11.4134C6.28687 12.6439 7.19767 13.8306 8.16675 14.9689L8.50453 15.3645L8.8423 14.9689C9.81126 13.8305 10.7221 12.6438 11.5712 11.4134L11.7267 11.1778C12.5756 9.91114 13.7401 8.17781 13.7401 6.10225C13.733 4.71714 13.1779 3.39117 12.1959 2.41424C11.214 1.43731 9.88521 0.888898 8.50008 0.888916ZM10.9845 10.6667L10.8245 10.9022C10.0601 12.0489 9.04675 13.3334 8.50008 13.9689C7.97564 13.3334 6.94008 12.0489 6.17564 10.9022L6.02008 10.6667C5.23342 9.49336 4.15342 7.88892 4.15342 6.08447C4.15342 5.51366 4.26585 4.94844 4.48429 4.42107C4.70273 3.89371 5.0229 3.41454 5.42652 3.01091C5.83015 2.60729 6.30932 2.28712 6.83668 2.06868C7.36405 1.85023 7.92927 1.7378 8.50008 1.7378C9.07089 1.7378 9.63612 1.85023 10.1635 2.06868C10.6908 2.28712 11.17 2.60729 11.5736 3.01091C11.9773 3.41454 12.2974 3.89371 12.5159 4.42107C12.7343 4.94844 12.8467 5.51366 12.8467 6.08447C12.8467 7.90669 11.7712 9.51114 10.9845 10.6667Z"
                        fill="#6B7280"
                      />
                    </svg>

                    <p className="ml-1 mb-0.5 text-xs leading-none text-gray-500">
                      {Number(citiesDistance[index + 1]) > -1
                        ? citiesDistance[index + 1]
                        : '...'}{' '}
                      km de você
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 w-full">
            <p className="text-center font-bold">Modalidade</p>
            <div className="flex gap-2 mt-4 w-full">
              <button
                type="button"
                onClick={() => setActiveModality('foot')}
                className={classNames(
                  'font-semibold text-center flex flex-col items-center w-full p-5 rounded-lg shadow-lg border border-transparent',
                  {
                    'border-primary': activeModality === 'foot',
                  }
                )}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9 8.55005L16.5 12L19.5 11"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M8.5 9L6.5 10L5.5 13"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                  <path
                    d="M13.5 15L15.5 17V22"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                  <path
                    d="M13 6C14.3807 6 15.5 4.88071 15.5 3.5C15.5 2.11929 14.3807 1 13 1C11.6193 1 10.5 2.11929 10.5 3.5C10.5 4.88071 11.6193 6 13 6Z"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                  <path
                    d="M8.5 22.9999L12.511 5.9519"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>

                <p className="text-xs mt-1 leading-4 font-semibold">A pé</p>
              </button>
              <button
                type="button"
                onClick={() => setActiveModality('bike')}
                className={classNames(
                  'text-center flex flex-col items-center w-full p-5 rounded-lg shadow-lg border border-transparent font-semibold',
                  {
                    'border-primary': activeModality === 'bike',
                  }
                )}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_134:273)">
                    <path
                      d="M5.5 23C7.70914 23 9.5 21.2091 9.5 19C9.5 16.7909 7.70914 15 5.5 15C3.29086 15 1.5 16.7909 1.5 19C1.5 21.2091 3.29086 23 5.5 23Z"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M19.5 23C21.7091 23 23.5 21.2091 23.5 19C23.5 16.7909 21.7091 15 19.5 15C17.2909 15 15.5 16.7909 15.5 19C15.5 21.2091 17.2909 23 19.5 23Z"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M17.5 5C18.6046 5 19.5 4.10457 19.5 3C19.5 1.89543 18.6046 1 17.5 1C16.3954 1 15.5 1.89543 15.5 3C15.5 4.10457 16.3954 5 17.5 5Z"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M12.5 20.0001V15.0001L9.42197 12.6921C9.30738 12.6061 9.2126 12.4965 9.14404 12.3707C9.07548 12.245 9.03475 12.1059 9.02461 11.963C9.01446 11.8201 9.03513 11.6767 9.08523 11.5425C9.13533 11.4083 9.21368 11.2864 9.31497 11.1851L12.793 7.70709C12.9805 7.51962 13.2348 7.41431 13.5 7.41431C13.7651 7.41431 14.0194 7.51962 14.207 7.70709L17.5 11.0001H20.5"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_134:273">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-xs mt-1 leading-4 font-semibold">De bike</p>
              </button>
            </div>
          </div>
        </div>
        <Link href="/">
          <a
            onClick={() => dispatch(resetUser())}
            className="w-full btn btn-large font-medium bg-red-600"
          >
            Sair da conta
          </a>
        </Link>
      </div>
    </Main>
  );
};

Perfil.layout = 'authenticated';

export default Perfil;
