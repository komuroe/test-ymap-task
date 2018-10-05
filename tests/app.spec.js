import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import WaypointInput from '../src/components/WaypointInput';
import WaypointsListContainer from '../src/components/WaypointsListContainer';
import EditableMap from '../src/components/EditableMap';
import LogoIcon from '../src/components/icons/LogoIcon';
import App from '../src/components/App';
import WaypointItem from '../src/components/WaypointItem';
import WaypointMark from '../src/components/WaypointMark';

describe('App', () => {
  it('should render EditableMap, LogoIcon, WaypointInput and WaypointListContainer inside of the App', () => {
    const app = mount(<App />);
    setTimeout(() => {
      expect(app.containsAllMatchingElements([
        <EditableMap />,
        <LogoIcon />,
        <WaypointInput />,
        <WaypointsListContainer />,
      ])).to.equal(true);
      // tests fall if we put too short delay
    }, 500);
  });

  it('should start with no waypoints', () => {
    const app = mount(<App />);
    expect(app.state('waypoints')).to.deep.equal([]);
  });

  it('adds one waypoint', () => {
    const app = mount(<App />);
    app.instance().addWaypoint('point of view');
    expect(app.state('waypoints').length).to.equal(1);
  });

  it('deletes a waypoint', () => {
    const app = mount(<App />);
    app.setState({ waypoints: singleWaypointSet });
    app.instance().deleteWaypoint(singleWaypointSet[0].id);
    expect(app.state('waypoints')).to.deep.equal([]);
  });

  it('updates waypoint coordinates', () => {
    const app = mount(<App />);
    app.setState({ waypoints: singleWaypointSet });
    app.instance().updateWaypointCoords(singleWaypointSet[0].id, [0, 0]);
    expect(app.state('waypoints')[0].coords).to.deep.equal([0, 0]);
  });

  it('updates waypoint address', () => {
    const app = mount(<App />);
    const address = 'Мой адрес - Не дом и не улица';
    app.setState({ waypoints: singleWaypointSet });
    app.instance().updateWaypointAddr(singleWaypointSet[0].id, 'Мой адрес - Не дом и не улица');
    expect(app.state('waypoints')[0].addr).to.equal('Мой адрес - Не дом и не улица');
  });

  it('changes waypoints order', () => {
    const app = mount(<App />);
    app.instance().updateWaypointsOrder(twoWaypointsSet);
    expect(app.state('waypoints')).to.deep.equal(twoWaypointsSet);
  });

  it('passes addWaypoint to WaypointInput', () => {
    const app = mount(<App />);
    const waypointInput = app.find(WaypointInput);
    const { addWaypoint } = app.instance();
    expect(waypointInput.prop('addWaypoint')).to.equal(addWaypoint);
  });

  it('passes deleteWaypoint to WaypointsListContainer', () => {
    const app = mount(<App />);
    const waypointsListContainer = app.find(WaypointsListContainer);
    const { deleteWaypoint } = app.instance();
    expect(waypointsListContainer.prop('deleteWaypoint')).to.equal(deleteWaypoint);
  });

  it('passes updateWaypointCoords to EditableMap', () => {
    const app = mount(<App />);
    const editableMap = app.find(EditableMap);
    const { updateWaypointCoords } = app.instance();
    expect(editableMap.prop('updateWaypointCoords')).to.equal(updateWaypointCoords);
  });

  it('passes updateWaypointAddr to EditableMap', () => {
    const app = mount(<App />);
    const editableMap = app.find(EditableMap);
    const { updateWaypointAddr } = app.instance();
    expect(editableMap.prop('updateWaypointAddr')).to.equal(updateWaypointAddr);
  });

  it('passes registerMapCenterGetter to EditableMap', () => {
    const app = mount(<App />);
    const editableMap = app.find(EditableMap);
    const { registerMapCenterGetter } = app.instance();
    expect(editableMap.prop('registerMapCenterGetter')).to.equal(registerMapCenterGetter);
  });

  it('renders waypointItem and waypointMark simultaneously', () => {
    const app = mount(<App />);
    setTimeout(() => {
      app.instance().addWaypoint('point of view');
      expect(app.find(<WaypointItem />).length).to.equal(1);
      expect(app.find(<WaypointMark />).length).to.equal(1);
    }, 500);
  });
});
