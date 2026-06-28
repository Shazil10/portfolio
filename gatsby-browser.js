import React from 'react';
import Maintenance from './src/components/Maintenance';
const { enabled: maintenanceEnabled } = require('./maintenance.json');

export const wrapPageElement = ({ element }) => {
  if (maintenanceEnabled) {
    return <Maintenance />;
  }

  return element;
};
