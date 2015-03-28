/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var Parse = require('parse').Parse;

// lollerskates
global.Parse = Parse;
global.React = React;

var ParseReact = require('parse-react/dist/parse-react.js');

var Feed = require('./Feed');

var PARSE_APP_ID = 'kpy02yJbMAM8fRVY4ZR2dLC3WaAm352Ia2Vg59Si';
var PARSE_JS_SDK = 'mlwP3Hd4G33suIcucErZOXyOnEqFm0c2TOiS8Oi2';

Parse.initialize(PARSE_APP_ID, PARSE_JS_SDK);

var yologram = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Y O L O G R A M',
          component: Feed,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('yologram', () => yologram);
