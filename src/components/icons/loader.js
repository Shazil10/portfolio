// IconLoader.js
import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>

    {/* Keyframe definition right in the SVG */}
    <defs>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </defs>

    <g>
      {/* “SZ” group, hidden at first & fading in after 0.3s */}
      <g
        id="SF"
        transform="translate(-50, -33) scale(0.1)"
        style={{
          opacity: 0,
          animation: 'fadeIn 0.5s ease-in 1s forwards',
        }}>
        {/* S shape */}
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
        {/* F shape — vertical bar with two horizontal bars */}
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

      {/* Outer hex path (unchanged) */}
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="
          M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
