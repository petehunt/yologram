'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image
} = React;

var Avatar = require('./Avatar');

var FeedUnit = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.photo}
            source={{uri: this.props.photoUrl}}
          />
          <Avatar username={this.props.username} />
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    // TODO (phunt): actually learn flexbox
    height: 480,
    marginBottom: 8,
    backgroundColor: 'gray',
  },
  photoContainer: {
  },
  photo: {
    width: 320,
    height: 320,

  },
});

module.exports = FeedUnit;
