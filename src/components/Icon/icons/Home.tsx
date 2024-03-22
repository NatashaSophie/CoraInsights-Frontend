import React from 'react';

const Home: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 8.414L11.5 3.914L4.414 11H6V19H9V13H14V19H17V11H18.586L17 9.414V6H16V8.414ZM2 12L11.5 2.5L15 6V5H18V9L21 12H18V19.998H13V13.998H10V19.998H5V12H2Z" />
    </svg>
  );
};

export default Home;
