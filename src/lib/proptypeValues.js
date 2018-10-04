import PropTypes from 'prop-types';

const WaypointPropTypes = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.string,
  coords: PropTypes.arrayOf(PropTypes.number),
});

export default WaypointPropTypes;
