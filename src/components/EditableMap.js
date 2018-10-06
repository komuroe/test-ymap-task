import React from "react";
import PropTypes from 'prop-types';
import WaypointPropTypes from '../lib/proptypeValues';
import { YMaps, Map } from 'react-yandex-maps';
import WaypointMark from './WaypointMark';
import Wayline from './Wayline';

class EditableMap extends React.Component {
  static propTypes = {
    mapState: PropTypes.shape({
      center: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
      controls: PropTypes.array,
    }),
    mapSize: PropTypes.shape({
      height: PropTypes.string,
      width: PropTypes.width,
    }),
    updateWaypointCoords: PropTypes.func,
    waypoints: PropTypes.arrayOf(WaypointPropTypes),    
  };

  componentDidMount() { 
    const { registerMapCenterGetter } = this.props; 
    registerMapCenterGetter(this.getCenter);
  }

  setMapControlInstanceRef = ref => {
    this.map = ref;
    this.onMapInstanceAvailable();
  };

  onMapInstanceAvailable = () => {
    // cycled map causes a bug in the display of waypoints
    // that's why map duplication is forbidden
    this.map.options.get('projection').isCycled = () => [false, false];
  };

  setYmapsInstanceRef = ymaps => {
    this.ymaps = ymaps;
  };

  getCenter = () => {
    if (this.map) {
      return [...this.map.getCenter()];
    }
  };

  getGeocode = (coords, callback) => {
    if (this.ymaps) {
      this.ymaps.geocode(coords, {
        json: true,
        results: 1
        }).then(function (result) {
          const members = result.GeoObjectCollection.featureMember,
          geoObjectData = (members && members.length) ? members[0].GeoObject : null;
          if (geoObjectData) {
            callback(geoObjectData.metaDataProperty.GeocoderMetaData.text)
          }
        }, this);
    }
  };

	render() {
		return(
			<YMaps
        onApiAvaliable={(ymaps) => this.setYmapsInstanceRef(ymaps)}
      >
        <Map 
          state={this.props.mapState} 
          height={this.props.mapSize.height} 
          width={this.props.mapSize.width}
          instanceRef={this.setMapControlInstanceRef}
          onClick={this.getGeocode}
        >

          {this.props.waypoints.map((waypoint) => (
            <WaypointMark 
              key={`waypointMark-${waypoint.id}`} 
              waypoint={waypoint}
              updateWaypointCoords={this.props.updateWaypointCoords}
              updateWaypointAddr={this.props.updateWaypointAddr}
              getGeocode={this.getGeocode}
            />
          ))}

          <Wayline waypoints={this.props.waypoints}/>
          
				</Map>
			</YMaps>
		);
	};
}

export default EditableMap;
