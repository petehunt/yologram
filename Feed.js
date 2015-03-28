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

var Feed = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      photos: (new Parse.Query('Photo')).descending('createdAt')
    };
  },

  renderRow: function(row) {
    return <FeedUnit username="pwh" photoUrl={row.imagedata._url}/>;
  },

  render: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds = ds.cloneWithRows(this.data.photos);

    return (
      <ListView
        style={styles.container}
        dataSource={ds}
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
