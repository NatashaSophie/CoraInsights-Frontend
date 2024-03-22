import React from 'react';

const Success: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
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
        d="M10.0001 1.6665C5.39758 1.6665 1.66675 5.39734 1.66675 9.99984C1.66675 14.6023 5.39758 18.3332 10.0001 18.3332C14.6026 18.3332 18.3334 14.6023 18.3334 9.99984C18.3334 5.39734 14.6026 1.6665 10.0001 1.6665ZM8.33342 14.5115L4.41092 10.589L5.58925 9.41067L8.33342 12.1548L14.4109 6.07734L15.5892 7.25567L8.33342 14.5115Z"
        fill="white"
      />
    </svg>
  );
};

export default Success;
