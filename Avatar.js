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

var Avatar = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.pic}
          source={{uri: 'http://graph.facebook.com/' + this.props.username + '/picture'}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>{this.props.username}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  pic: {
    width: 64,
    height: 64,
    marginRight: 8,
  },
  textContainer: {
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});


module.exports = Avatar;
