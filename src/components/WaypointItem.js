import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import TimesIcon from './icons/TimesIcon';

const WaypointItem = SortableElement(({ value, name, deleteWaypoint }) => {
  return (
    <li className="waypoint-item app-font app-text app-text_weight_light">
      <span className="waypoint-item__text">{name}</span>
      <div className="waypoint-item__button-wrapper">
        <TimesIcon className="cross-icon" color="#b8b8b8" />
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
