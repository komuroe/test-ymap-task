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
  };

  getCenter = () => {
    if (this.map) {
      return this.map.getCenter().slice();      
    }
  };

	render() {
		return(
			<YMaps>
        <Map 
          state={this.props.mapState} 
          height={this.props.mapSize.height} 
          width={this.props.mapSize.width}
          instanceRef={this.setMapControlInstanceRef}   
        >

        {this.props.waypoints.map((waypoint) => (
          <WaypointMark 
            key={`waypointMark-${waypoint.id}`} 
            waypoint={waypoint}
            updateWaypointCoords={this.props.updateWaypointCoords}            
          />
        ))}

        <Wayline waypoints={this.props.waypoints}/>

				</Map>
			</YMaps>
		);
	};
}

export default EditableMap;
