import React from 'react';

const PowerLevel: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.46625 5.33332C2.68004 2.95883 5.15019 1.33325 8.00001 1.33325C10.8502 1.33325 13.3206 2.95926 14.5342 5.33425"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M6.00864 6.6665C6.00864 6.6665 9.53647 11.2423 9.88961 12.2035C10.2428 13.1647 9.72057 14.2198 8.72329 14.5601C7.72601 14.9005 6.63128 14.3972 6.27814 13.436C5.92501 12.4748 6.00864 6.6665 6.00864 6.6665Z"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default PowerLevel;
