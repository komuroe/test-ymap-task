require('@babel/register')();
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;
global.document = document;

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

var exposedProperties = ['window', 'navigator', 'document'];
global.window = document.defaultView;
var keys  = Object.keys(document.defaultView);

// delete localStorage and sessionStorage
// because we don't need it and their presence causes an exception

delete keys[keys.indexOf('localStorage')];
delete keys[keys.indexOf('sessionStorage')];

keys.forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// Ignore css import,
// since mocha throws syntax exeptions on it

function nope() {
  return null;
}
require.extensions['.css'] = nope;

global.navigator = {
  userAgent: 'node.js',
};

// maybe it is not the best way to get access to the test data
// but i'm not really experinced in test writing

const testData = require('./test-data');

Object.assign(global, testData);
