import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WaypointPropTypes from '../lib/proptypeValues';
import WaypointsList from './WaypointsList';
import {arrayMove} from 'react-sortable-hoc';


export class WaypointsListContainer extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(WaypointPropTypes),
    onSortEnd: PropTypes.func,
    deleteWaypoint: PropTypes.func,
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.updateWaypointsOrder(arrayMove(this.props.items, oldIndex, newIndex));
  };
  render() {
    return <WaypointsList 
    items={this.props.items} 
    onSortEnd={this.onSortEnd} 
    deleteWaypoint={this.props.deleteWaypoint}/>;
  }
}

export default WaypointsListContainer;
