import React from 'react';
import { Polyline } from 'react-yandex-maps';
import PropTypes from 'prop-types';
import WaypointPropTypes from '../lib/proptypeValues';

const Wayline = ({ waypoints }) => {
  return (
    <Polyline
      geometry={{
        coordinates: waypoints.map(waypoint => waypoint.coords),
      }}
      options={{
        strokeColor: '#848484',
        strokeWidth: 2,
      }}
    />
  );
};

Wayline.propTypes = {
  waypoints: PropTypes.arrayOf(WaypointPropTypes),
};

export default Wayline;
