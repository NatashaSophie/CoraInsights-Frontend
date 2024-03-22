import React from 'react';

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.843 9.59299L11.5 15.25L17.157 9.59299L16.45 8.88599L11.5 13.836L6.55 8.88599L5.843 9.59299Z" />
    </svg>
  );
};

export default ChevronDown;
