import React from 'react';

import {
  fPath,
  framePath,
  innerHexPath,
  logoMint,
  logoNavy,
  logoViewBox,
  sPath,
} from './logoGeometry';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox={logoViewBox}>
    <title>Loader Logo</title>
    <path d={framePath} fill={logoMint} fillRule="evenodd" />
    <path d={innerHexPath} fill={logoNavy} />
    <path d={sPath} fill={logoMint} />
    <path d={fPath} fill={logoMint} />
  </svg>
);

export default IconLoader;
