import React from 'react';
import PropTypes from 'prop-types';
import WaypointPropTypes from '../lib/proptypeValues';
import { Placemark } from 'react-yandex-maps';

class WaypointMark extends React.Component {
  static propTypes = {
    updateWaypointCoords: PropTypes.func,
    waypoint: WaypointPropTypes,
  };
  componentDidMount() {
    this.handleGeocode();
  };
  setPlacemarkControlInstanceRef = ref => {
    this.placemark = ref;
  };
  
  handleDrag = () => {
    this.props.updateWaypointCoords(this.props.waypoint.id, this.placemark.geometry.getCoordinates());
  };

  handleGeocode = () => {
    const { coords, id } = this.props.waypoint;
    this.props.getGeocode(coords, (addr) => {
      this.props.updateWaypointAddr(id, addr);
    } );
  };
  render() {
    const {id, coords, addr, name} = this.props.waypoint;
    return(
      <Placemark
        key={`placemark-${id}`}
        geometry={{
          coordinates: coords
        }}
        properties={{
          balloonContentHeader: `<span class="baloon__text app-font app-text app-text_weight_bold">${name}</span>`,
          balloonContentBody: `<hr class="baloon__hr"></hr><span class="baloon__text baloon__content app-font">${addr}</span>`,
        }}
        options={{
          draggable: true,
          preset: 'islands#darkOrangeIcon',
        }}
        onDragEnd={this.handleGeocode}
        onDrag={this.handleDrag}
        instanceRef={this.setPlacemarkControlInstanceRef}
      />
    );
  };   
}

export default WaypointMark;