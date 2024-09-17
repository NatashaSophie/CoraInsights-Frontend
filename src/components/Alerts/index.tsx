import React from 'react';

import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '@/hooks/state';
import { alertsSelector } from '@/store/alerts/selectors';
import { removeAlert } from '@/store/alerts/slice';

import Icon from '../Icon';

const Alerts: React.FC = () => {
	const alerts = useAppSelector(alertsSelector);
	const dispatch = useAppDispatch();

	return (
		<div className="absolute w-full px-8 z-50">
			{alerts.map((alert, index) => {
				setTimeout(() => {
					dispatch(
						removeAlert({
							index,
						})
					);
				}, alert.displayTime || 3000);

				return (
					<div
						key={`${alert.message}-${index}`}
						className={classNames('p-2 mt-4 border rounded-2xl first:mt-8', {
							'bg-green-50 border-green-500': alert.type === 'success',
							'bg-red-50 border-red-500': alert.type === 'error',
						})}
					>
						<div className="flex-1 flex items-center">
							<div
								className={classNames('p-1 w-7 mr-2 rounded-lg', {
									'bg-green-500': alert.type === 'success',
									'bg-red-500': alert.type === 'error',
								})}
							>
								<Icon name={alert.type} className="mr-2" />
							</div>
							<label className="flex-1 text-sm leading-5">
								{alert.message}
							</label>
							<button
								onClick={() =>
									dispatch(
										removeAlert({
											index,
										})
									)
								}
							>
								<Icon name="close" className="fill-current text-gray-500" />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Alerts;
