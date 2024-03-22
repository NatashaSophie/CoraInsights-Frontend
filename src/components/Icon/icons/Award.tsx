import React from 'react';

const Award: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
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
        d="M9.99999 12.4999C13.2217 12.4999 15.8333 9.88825 15.8333 6.66659C15.8333 3.44492 13.2217 0.833252 9.99999 0.833252C6.77833 0.833252 4.16666 3.44492 4.16666 6.66659C4.16666 9.88825 6.77833 12.4999 9.99999 12.4999Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.84168 11.575L5.83334 19.1666L10 16.6666L14.1667 19.1666L13.1583 11.5667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Award;
