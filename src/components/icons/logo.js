// logo.js
import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8, -2)">
      <g transform="translate(11, 5)">
        {/* Hexagon shape */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />

        {/* "SF" paths */}
        <g transform="translate(-61, -38) scale(0.1)">
          {/* "S" shape */}
          <path
            fill="currentColor"
            d="M986.386719 443.160156 
               L658.765625 632.328125 
               L658.699219 757.019531 
               L879.648438 883.589844 
               L879.648438 1030.480469 
               L879.582031 1030.441406 
               L765.570312 964.488281 
               L765.570312 849.011719 
               L658.765625 787.859375 
               L658.765625 1026.171875 
               L986.386719 1215.351562 
               L986.386719 1215.308594 
               L986.453125 1215.351562 
               L986.453125 821.511719 
               L765.570312 695.121094 
               L765.570312 694.011719 
               L791.472656 679.058594 
               L879.582031 628.058594 
               L879.648438 628.019531 
               L879.648438 729.660156 
               L986.453125 790.800781 
               L986.453125 443.160156 
               L986.386719 443.199219 
               Z"
          />
          {/* "F" shape — simple and clean design */}
          <path
            fill="currentColor"
            d="M1050,480
               L1150,540
               L1150,1180
               L1050,1120
               Z
               M1150,540
               L1300,540
               L1300,640
               L1150,640
               Z
               M1150,780
               L1260,780
               L1260,880
               L1150,880
               Z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default IconLogo;
