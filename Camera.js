'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ListView,
  CameraRoll,
  ActivityIndicatorIOS,
  Image,
} = React;

var FeedUnit = require('./FeedUnit');

var Parse = require('parse').Parse;
var ParseReact = require('parse-react/dist/parse-react.js');

var PHOTOS_PER_ROW = 3;

var Thumbnail = React.createClass({
  render: function() {
    return (
      <Image
        source={this.props.photo.image}
        style={[styles.thumbnail, this.props.middle && styles.thumbnailMiddle]}
      />
    );
  },
});

var ThumbnailGrid = React.createClass({
  render: function() {
    var rows = [];
    var currentRow = [];

    this.props.photos.edges.forEach(function(edge, i) {
      var photo = edge.node;
      if (currentRow.length === PHOTOS_PER_ROW) {
        rows.push(
          <View style={styles.row} key={i}>
            {currentRow}
          </View>
        );
        currentRow = [];
      }

      currentRow.push(
        <Thumbnail
          photo={photo}
          key={i}
          middle={i % 3 === 1}
        />
      );
    });
    return (
      <View>
        {rows}
      </View>
    );
  },
});

var Camera = React.createClass({
  componentDidMount: function() {
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
    var content;

    if (!this.state.photos) {
      content = <ActivityIndicatorIOS />;
    } else {
      content = <ThumbnailGrid photos={this.state.photos} />;
    }

    return (
      <View style={[styles.container, !this.state.photos && styles.containerLoading]}>
        {content}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  containerLoading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    backgroundColor: 'gray',
    width: 122,
    height: 122,
  },
  thumbnailMiddle: {
    marginLeft: 4,
    marginRight: 4,
    width: 123,
  },
  row: {
    flexDirection: 'row',
    width: 375
  },
});

module.exports = Camera;
