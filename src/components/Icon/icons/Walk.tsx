import React from 'react';

const Walk: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 7.125L13.3333 10L15.8333 9.16667"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M6.66669 7.5L5.00002 8.33333L4.16669 10.8333"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M10.8334 12.5L12.5 14.1667V18.3333"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M10.4167 4.99992C11.5673 4.99992 12.5 4.06718 12.5 2.91659C12.5 1.76599 11.5673 0.833252 10.4167 0.833252C9.26611 0.833252 8.33337 1.76599 8.33337 2.91659C8.33337 4.06718 9.26611 4.99992 10.4167 4.99992Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M6.66669 19.1666L10.0092 4.95996"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Walk;
