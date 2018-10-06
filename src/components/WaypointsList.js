import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import WaypointPropTypes from '../lib/proptypeValues';
import WaypointItem from './WaypointItem';
import '../css/animations.css';

export const WaypointsList = SortableContainer(({ items, deleteWaypoint }) => {
  return (
    <ReactCSSTransitionGroup
      component="ul"
      transitionName="item"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}
      className={`waypoints-list${(items.length) ? ' waypoints-list_not_empty' : ''}`}
    >
      {items.map((waypoint, index) => (
        <WaypointItem
          key={`item-${waypoint.id}`}
          index={index}
          value={waypoint.id}
          name={waypoint.name}
          deleteWaypoint={deleteWaypoint}
        />
      ))}
    </ReactCSSTransitionGroup>
  );
});

WaypointsList.propTypes = {
  items: PropTypes.arrayOf(WaypointPropTypes),
  deleteWaypoint: PropTypes.func,
};

export default WaypointsList;
