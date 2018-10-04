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
    />
  );
};

Wayline.propTypes = {
  waypoints: PropTypes.arrayOf(WaypointPropTypes),
};

export default Wayline;
