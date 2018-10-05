import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import TimesIcon from './icons/TimesIcon';

const WaypointItem = SortableElement(({ value, name, deleteWaypoint }) => {
  return (
    <li className="waypoint-item app-font app-text app-text_weight_light">
      <span>{name}</span>
      <div className="waypoint-item__button-wrapper">
        <TimesIcon className="cross-icon" color="#848484" />
        <button
          className="waypoint-item__button"
          type="button"
          onClick={() => deleteWaypoint(value)}
        />
      </div>
    </li>
  );
});

WaypointItem.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  deleteWaypoint: PropTypes.func,
};

export default WaypointItem;
