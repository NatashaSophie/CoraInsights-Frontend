import React from 'react';

const Menu: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 8V7H20V8H3ZM20 12V13H3V12H20ZM3 17H20V18H3V17Z" />
    </svg>
  );
};

export default Menu;
