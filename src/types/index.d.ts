export type AlertType = 'success' | 'error';

export type Alert = {
  message: string;
  type: AlertType;
  displayTime?: number;
};

export type Image = {
  url: string;
  width?: number;
  height?: number;
};

export type Location = {
  lat: number;
  lon: number;
};

export type City = {
  id: number;
  name: string;
  coordinates: {
    lat: number;
    lon: number;
  };
};

export type DistanceGeoApiFy = {
  distance?: number;
  time?: number;
  source_index?: number;
  target_index?: number;
};

export type SearchParams = {
	city: number;
	modality: string;
}

export type LayoutType = 'authenticated' | 'public';
