const waypoint1 = {
  name: 'jumping-off point',
  id: '123',
  coords: [55.0, 82.9],
  addr: '',
};
const waypoint2 = {
  name: 'point of no return',
  id: '345',
  coords: [42, 42],
  addr: '',
};
const waypoint3 = {
  name: 'point of contact',
  id: '678',
  coords: [19, 92],
  addr: '',
};
const testData = {
  waypoint: waypoint1,
  emptyWaypointsSet: [],
  singleWaypointSet: [waypoint1],
  twoWaypointsSet: [waypoint1, waypoint2],
  fewWaypointsSet: [waypoint1, waypoint2, waypoint3],
};

module.exports = testData;
