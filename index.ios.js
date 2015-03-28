/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

require('./bootstrap');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  CameraRoll,
} = React;
var TabBarItemIOS = TabBarIOS.Item;

var Camera = require('./Camera');
var Feed = require('./Feed');

var ix = require('./ix');

var yologram = React.createClass({
  handleSelect: function(tab) {
    this.setState({tab: tab});
  },

  getInitialState: function() {
    return {tab: 'camera'};
  },

  render: function() {
    return (
      <TabBarIOS selectedTab="feed">
        <TabBarItemIOS
          name="feed"
          selected={this.state.tab === 'feed'}
          icon={{}}
          onPress={this.handleSelect.bind(this, 'feed')}
          title="Feed">
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Y O L O G R A M',
              component: Feed,
            }}
          />
        </TabBarItemIOS>
        <TabBarItemIOS
          name="camera"
          selected={this.state.tab === 'camera'}
          icon={{}}
          onPress={this.handleSelect.bind(this, 'camera')}
          title="Camera">
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Camera roll',
              component: Camera,
            }}
          />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('yologram', () => yologram);
