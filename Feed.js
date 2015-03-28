'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var FeedUnit = require('./FeedUnit');

var TEST_PHOTO = 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11111410_1611602099085745_1536638339_n.jpg';

var Feed = React.createClass({
  render: function() {
    // TODO (vjeux):
    // <View flex={1} backgroundColor="red" marginTop={64}>
    // ;)
    return (
      <View style={styles.container}>
        <FeedUnit username="pwh" photoUrl={TEST_PHOTO} />
        <FeedUnit username="justintimberlake" photoUrl={TEST_PHOTO} />
        <FeedUnit username="justinbieber" photoUrl={TEST_PHOTO}  />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});

module.exports = Feed;
