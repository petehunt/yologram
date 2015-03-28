'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ListView,
} = React;

var FeedUnit = require('./FeedUnit');

var Parse = require('parse').Parse;
var ParseReact = require('parse-react/dist/parse-react.js');

var Camera = React.createClass({
  handleCamera: function() {
    CameraRoll.getPhotos({
      first: 5,
    }, function(photos) {
      this.setState({photos: photos});
    }.bind(this), function(error) {
      console.error(error);
    });
  },

  getInitialState: function() {
    return {
      photos: null,
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Camera</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

module.exports = Camera;
