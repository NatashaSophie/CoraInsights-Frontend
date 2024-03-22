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

export type LayoutType = 'authenticated' | 'public';
