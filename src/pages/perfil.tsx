/* eslint-disable consistent-return */
import React, { useState, useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames';
import { format } from 'date-fns';
import Link from 'next/link';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '@/components/Icon';
import Loading from '@/components/Loading';
import UserAvatar from '@/components/UserAvatar';
import { cities } from '@/containers/forms/TrailForm';
import {
	Enum_Trails_Modality,
	UploadMutation,
	useUpdateTrailMutation,
	useUpdateUserMutation,
} from '@/graphql/generated/graphql';
import { getDistanceFromGeoApiFy } from '@/services/geoApiFy';
import { addAlert } from '@/store/alerts/slice';
import { distanceSelector, paramsSelector } from '@/store/distance/selectors';
import { resetDistance, setCity, setDistance, setModality } from '@/store/distance/slice';
import { timerSelector } from '@/store/timer/selectors';
import { setTimer } from '@/store/timer/slice';
import { trailSelector } from '@/store/trails/selectors';
import { userPositionSelector, userSelector } from '@/store/user/selectors';
import { resetUser } from '@/store/user/slice';
import { Location } from '@/types';
import { CheckApiAvailability } from '@/utils/checkApiAvailability';
import { DateDifferenceInSeconds } from '@/utils/dateDifference';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

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

	const userCurrentPosition = useSelector(userPositionSelector);
	const dispatch = useDispatch();
	const trail = useSelector(trailSelector);
	// const [activeCity, setActiveCity] = useState(trail?.inversePaths ? 2 : 1);
	const [isLoading, setIsloading] = useState(false);
	// const [activeModality, setActiveModality] = useState<'bike' | 'foot' | ''>(
	// 	trail?.modality || ''
	// );
	const [refresh, setRefresh] = useState(false);
	const currentDate = new Date().toISOString();
	const currentTimer = useSelector(timerSelector);
	const currentDistance = useSelector(distanceSelector);
	const currentParams = useSelector(paramsSelector);
	const [counter, setCounter] = useState(0);
	const requestInterval = Number(process.env.NEXT_PUBLIC_API_REQUEST_INTERVAL); // seconds
	const firstRun = useRef(true);

	const getCitiesDistances = useCallback(async (userPosition: Location) => {
		if (currentParams.modality === '' || firstRun.current) return;
		setIsloading(true);

		const currentCityCoordinates = cities.filter((city) => city.id === currentParams.city).map((filteredCity) => filteredCity.coordinates); // Filtro a cidade selecionada e envio as coordenadas pra api.
		await getDistanceFromGeoApiFy(userPosition, currentCityCoordinates, currentParams.modality)
			.then((response) => {
				// response.data.sources_to_targets[0]?.map((distance => setCitiesDistance(distance)));
				response.data.sources_to_targets[0]?.map((distance => dispatch(setDistance(distance))));
				dispatch(setTimer(new Date().toISOString()))
			})
			.catch((error) => {
				if (error.toJSON().status === 400) {
					dispatch(
						addAlert({
							message: 'Você está muito longe das cidades de origem das trilhas.',
							type: 'error',
						})
					);
					dispatch(resetDistance());
				}
			});

		// distance: [{"distance":52210,"time":52778,"source_index":0,"target_index":0},{"distance":157394,"time":155665,"source_index":0,"target_index":1}]
		setIsloading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentParams.city, currentParams.modality, refresh]);

	const handleChangeModality = (value: 'bike' | 'foot') => {
		firstRun.current = false;

		if (!CheckApiAvailability(currentDate, currentTimer)) {
			dispatch(
				addAlert({
					message: 'Aguarde o limite de consultas consecutivas.',
					type: 'error',
				})
			);

			return;
		}

		if (currentParams.modality !== value) {
			setIsloading(prev => !prev);
			// setActiveModality(value);
			dispatch(setModality(value));
		} else {
			return;
		}

		dispatch(setTimer(new Date().toISOString()));
	}

	const handleChangeActiveCity = (value: number) => {
		firstRun.current = false;
		if (currentParams.modality === '') {
			// setActiveCity(value);
			dispatch(setCity(value));
			return;
		}

		if (!CheckApiAvailability(currentDate, currentTimer)) {
			dispatch(
				addAlert({
					message: 'Aguarde o limite de consultas consecutivas.',
					type: 'error',
				})
			);

			return;
		}

		if (currentParams.city !== value) {
			setIsloading(prev => !prev);
			// setActiveCity(value);
			dispatch(setCity(value));
		} else {
			return;
		}

		dispatch(setTimer(new Date().toISOString()));
	}

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
		const countDown = setTimeout(() => {
			const dateComp = DateDifferenceInSeconds(new Date(currentDate), new Date(currentTimer));

			if (dateComp > requestInterval) {
				setCounter(0);
				return () => clearTimeout(countDown);
			}

			setCounter(requestInterval - dateComp);
		}, 1000);

		return () => clearTimeout(countDown);
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentParams.city !== null && currentParams.modality.length > 0 && userCurrentPosition) {
				getCitiesDistances(userCurrentPosition);
			}
		}, 1500); // Tweak, only call api after x ms
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentParams.city, currentParams.modality, getCitiesDistances, refresh]);

	// useEffect(() => {
	// 	const countDown = setTimeout(() => {
	// 		const dateComp = DateDifferenceInSeconds(new Date(currentDate), new Date(currentTimer));

	// 		if (dateComp > 15) {
	// 			setCounter(0);
	// 			return () => clearTimeout(countDown);
	// 		}

	// 		setCounter(requestInterval - dateComp);
	// 	}, 1000);

	// 	return () => clearTimeout(countDown);
	// });

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		if (activeCity !== null && activeModality.length > 0 && userCurrentPosition) {
	// 			getCitiesDistances(userCurrentPosition);
	// 		}
	// 	}, 1500); // Tweak, only call api after x ms
	// 	return () => clearTimeout(timer);
	// }, [activeCity, activeModality, getCitiesDistances, userCurrentPosition]);

	useEffect(() => {
		const inversePath = currentParams.city > 1;

		if (trail) {
			if (
				trail?.modality !== currentParams.modality ||
				trail.inversePaths !== inversePath
			) {
				trailMutation.mutate({
					trailId: trail?.id,
					inversePath: currentParams.city > 1,
					modality:
						currentParams.modality === 'bike'
							? Enum_Trails_Modality.Bike
							: Enum_Trails_Modality.Foot,
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentParams.modality, currentParams.city, trail]);

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
						<p className="mt-8 text-center font-bold">Cidade inicial da trilha</p>
						<div className="flex gap-2 mt-4 w-full">
							{cities.map((city) => (
								<button
									type="button"
									onClick={() => handleChangeActiveCity(city.id)}
									className={classNames(
										'text-center flex flex-col items-center w-full p-5 rounded-lg shadow-lg border border-transparent',
										{
											'border-primary': currentParams.city === city.id,
										}
									)}
									key={city.name}
								>
									<p className="text-xs leading-4 font-semibold mb-1">{city.name}</p>
								</button>
							))}
						</div>
					</div>

					<div className="mt-8 w-full">
						<p className="text-center font-bold">Modalidade</p>
						<div className="flex gap-2 mt-4 w-full">
							<button
								type="button"
								onClick={() => handleChangeModality('foot')}
								className={classNames(
									'font-semibold text-center flex flex-col items-center w-full p-5 rounded-lg shadow-lg border border-transparent',
									{
										'border-primary': currentParams.modality === 'foot',
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
								onClick={() => handleChangeModality('bike')}
								className={classNames(
									'text-center flex flex-col items-center w-full p-5 rounded-lg shadow-lg border border-transparent font-semibold',
									{
										'border-primary': currentParams.modality === 'bike',
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

				<div className="mt-8 mb-8 w-full h-4">
					<div className="text-center font-bold text-gray-700">
						{(currentDistance?.distance && !isLoading)
							?
							(
								`${Math.round(currentDistance.distance / 1000)} KM de você`
							)
							: <Loading isLoading={isLoading} size={24} />
						}

						{(currentDistance?.distance && !isLoading) && (
							<div className='text-xs text-gray-600'>
								Última consulta: {format(new Date(currentTimer), 'dd/MM/yyyy - HH:mm')}
							</div>
						)}

					</div>
				</div>

				{(currentDistance?.distance && !isLoading) && (
					<button
						className="middle none center m-4 p-4 flex items-center justify-center border-transparent rounded-lg transition-all leading-none hover hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none"
						type="button"
						onClick={() => {
							if (!CheckApiAvailability(currentDate, currentTimer)) {
								dispatch(
									addAlert({
										message: 'Aguarde o limite de consultas consecutivas.',
										type: 'error',
									})
								);

								return;
							}
							setRefresh(prev => !prev);
							setIsloading(true);
							firstRun.current = false;
						}}
					>
						<Icon name="refresh" className="fill-current text-gray-500 text-lg" />
					</button>
				)}

				<div className="my-8 w-full h-2">
					<p className="text-center font-bold text-gray-700">
						{counter > 0 && (
							<span
								className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
							>
								<Icon name="info" className="fill-current text-gray-500" />&nbsp;
								Nova consulta liberada em {counter} segundos.
							</span>
						)}
					</p>
				</div>

				<Link href="/">
					<a
						onClick={() => dispatch(resetUser())}
						className="mt-8w-full btn btn-large font-medium bg-red-600"
					>
						Sair da conta
					</a>
				</Link>

				<div className="mt-8 w-full h-2">
					<p className="w-full h-4"></p>
				</div>
			</div>
		</Main>
	);
};

Perfil.layout = 'authenticated';

export default Perfil;
