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

var TEST_PHOTO = 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11111410_1611602099085745_1536638339_n.jpg';

var TEST_DATA = [
  {username: 'pwh', photoUrl: TEST_PHOTO},
  {username: 'justintimberlake', photoUrl: TEST_PHOTO},
  {username: 'justinbieber', photoUrl: TEST_PHOTO},
];

var Feed = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(TEST_DATA),
    };
  },
  renderRow: function(row) {
    return <FeedUnit {...row} />;
  },
  render: function() {
    // TODO (vjeux):
    // <View flex={1} backgroundColor="red" marginTop={64}>
    // ;)
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },

});

module.exports = Feed;
