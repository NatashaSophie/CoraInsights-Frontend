import axios from 'axios';

import { DistanceGeoApiFy, Location } from '@/types';

export const getDistanceFromGeoApiFy = async (
	userPosition: Location,
	locations: Location[],
	activeModality: string
) => {
	// userPosition: {"lat":-16.3052615,"lon":-48.9505257}
	// locations: [{"lat":-15.924396,"lon":-48.807133},{"lat":-15.937812,"lon":-50.142658}]
	// const body = { "mode": "drive", "sources": [{ "location": [-48.95312193161266, -16.32778625] }], "targets": [{ "location": [-48.8097687, -15.9252132] }, { "location": [-50.1427643, -15.9368354] }] };
	const body = {
		mode: activeModality === 'foot' ? 'walk' : 'bicycle',
		sources: [{ location: [userPosition.lon, userPosition.lat] }],
		targets: locations,
	};

	return axios.post<{
		[x: string]: any;
		sources_to_targets: DistanceGeoApiFy[][];
	}>(
		`https://api.geoapify.com/v1/routematrix?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`,
		body
	).then((res) => {
		return res;
	});

};
