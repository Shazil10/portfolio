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
          {/* "F" shape — vertical bar with two horizontal bars */}
          <path
            fill="currentColor"
            d="M1013,443
               L1120,506
               L1120,790
               L1342,790
               L1342,710
               L1120,710
               L1120,870
               L1342,870
               L1342,790
               L1120,790
               L1120,1218
               L1013,1157
               Z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default IconLogo;
