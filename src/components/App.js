import React, { Component} from 'react';
import PropTypes from 'prop-types';

import '../css/App.css';
import WaypointInput from './WaypointInput';
import WaypointsListContainer from './WaypointsListContainer';
import EditableMap from './EditableMap';
import LogoIcon from './icons/LogoIcon';

class App extends Component{
  
  state = {
    waypoints: [],
    mapState: { 
      center: [55.030199, 82.920430], 
      zoom: 10,
      controls: [],
    },
    mapSize: {
      height: '100%',
      width: '100%'
    }
  };

  addWaypoint = name => {
    const coords = this.getMapCenter() || this.state.mapState.center.slice();
    const waypoint = {
      name: name,
      id: `${Date.now().toString(36)}`,
      coords: coords,
    };
    this.setState(prevState => ({
      waypoints: [...prevState.waypoints, waypoint]
    }));
  };

  deleteWaypoint = id => {
    this.setState(prevState => ({
      waypoints: prevState.waypoints.filter(waypoint => waypoint.id !== id)
    }));
  };

  updateWaypointCoords = (id, coords) => {
    const waypoints = this.state.waypoints.map((waypoint)=>{
      if (waypoint.id === id) {
        waypoint.coords = coords;
      }
      return waypoint;
    });
    this.setState({waypoints: waypoints});
  }

  updateWaypointsOrder = (waypoints) => {
    this.setState({ waypoints });
  };

  registerMapCenterGetter = (callback) => { 
    this.getMapCenter = callback; 
  }

  render(){
    return(
      <div>
        <div className='map-wrapper'>
          <EditableMap 
            mapState={this.state.mapState}
            mapSize={this.state.mapSize} 
            waypoints={this.state.waypoints}
            updateWaypointCoords={this.updateWaypointCoords}
            registerMapCenterGetter={this.registerMapCenterGetter}
          />
        </div>
        <div className='controls-wrapper'>
          <div className='content-wrapper'>
            <div className='app-heading__wrapper'>
              <h1 className={`app-heading app-text`}> Редактор маршрутов</h1>
              <LogoIcon strokeColor="white" fillColor="transparent"/>
            </div>
          
            <WaypointInput 
              addWaypoint={this.addWaypoint}
            />

            <WaypointsListContainer
              items={this.state.waypoints}
              deleteWaypoint={this.deleteWaypoint}
              updateWaypointsOrder={this.updateWaypointsOrder}            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
