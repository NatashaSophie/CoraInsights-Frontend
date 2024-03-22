import React from 'react';

const SquarePin: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 17L2 23H22L19 17" strokeWidth="1.5" strokeMiterlimit="10" />
      <path
        d="M19 8C19 12.32 12 19.375 12 19.375C12 19.375 5 12.32 5 8C5 3.57 8.617 1 12 1C15.383 1 19 3.57 19 8Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default SquarePin;
