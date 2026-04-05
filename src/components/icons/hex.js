import React from 'react';

import { logoViewBox, outerHexPath } from './logoGeometry';

const IconHex = () => (
  <svg id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox={logoViewBox}>
    <title>Hexagon</title>
    <path d={outerHexPath} fill="currentColor" />
  </svg>
);

export default IconHex;
