import React from 'react';
import PropTypes from 'prop-types';
import WaypointPropTypes from '../lib/proptypeValues';
import { Placemark } from 'react-yandex-maps';

class WaypointMark extends React.Component {
  static propTypes = {
    updateWaypointCoords: PropTypes.func,
    waypoint: WaypointPropTypes,
  };

  setPlacemarkControlInstanceRef = ref => {
    this.placemark = ref;
  };
  
  handleDrag = () => {
    this.props.updateWaypointCoords(this.props.waypoint.id, this.placemark.geometry.getCoordinates());
  };  

  render() {
    const {id, coords, name} = this.props.waypoint;
    return(
      <Placemark
        key={`placemark-${id}`}
        geometry={{
        coordinates: coords
        }}
        properties={{
        balloonContent: name,
        }}
        options={{
        draggable: true,
        preset: 'islands#darkOrangeIcon',
        }}
        onDrag={this.handleDrag}
        instanceRef={this.setPlacemarkControlInstanceRef}
      />
    );
  };   
}

export default WaypointMark;