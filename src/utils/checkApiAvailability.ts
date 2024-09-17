

import { DateDifferenceInSeconds } from "./dateDifference";

export const CheckApiAvailability = (date1: string, date2: string) => {
	const requestInterval = Number(process.env.NEXT_PUBLIC_API_REQUEST_INTERVAL); // seconds
	
	if (DateDifferenceInSeconds(new Date(date1), new Date(date2)) < requestInterval) {
		return false;
	}

	return true;
}

