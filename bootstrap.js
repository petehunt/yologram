'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;

// lollerskates
global.Parse = Parse;
global.React = React;
var PARSE_APP_ID = 'kpy02yJbMAM8fRVY4ZR2dLC3WaAm352Ia2Vg59Si';
var PARSE_JS_SDK = 'mlwP3Hd4G33suIcucErZOXyOnEqFm0c2TOiS8Oi2';

Parse.initialize(PARSE_APP_ID, PARSE_JS_SDK);
