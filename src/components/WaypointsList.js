import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import WaypointPropTypes from '../lib/proptypeValues';
import WaypointItem from './WaypointItem';


export const WaypointsList = SortableContainer(({ items, deleteWaypoint }) => {
  return (
    <ul className={`waypoints-list${(items.length) ? '' : ' waypoints-list_empty'}`}>
      {items.map((waypoint, index) => (
        <WaypointItem
          key={`item-${waypoint.id}`}
          index={index}
          value={waypoint.id}
          name={waypoint.name}
          deleteWaypoint={deleteWaypoint}
        />
      ))}
    </ul>
  );
});

WaypointsList.propTypes = {
  items: PropTypes.arrayOf(WaypointPropTypes),
  deleteWaypoint: PropTypes.func,
};

export default WaypointsList;
