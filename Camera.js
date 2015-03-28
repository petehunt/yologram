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
  TouchableHighlight,
} = React;
var YologramManager = require('NativeModules').YologramManager;

var FeedUnit = require('./FeedUnit');

var Parse = require('parse').Parse;
var ParseReact = require('parse-react/dist/parse-react.js');
var Photo = require('./Photo');

var PHOTOS_PER_ROW = 3;

var Thumbnail = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Image
          source={this.props.photo.image}
          style={[styles.thumbnail, this.props.middle && styles.thumbnailMiddle]}
        />
      </TouchableHighlight>
    );
  },
});

var ThumbnailGrid = React.createClass({
  handlePress: function(photo) {
    YologramManager.getImageData(photo.image.uri, function(base64) {
      var file = new Parse.File(
        'image' + Date.now() + '.jpg',
        {base64: base64}
      );
      file.save();
      var photo = new Photo();
      photo.set('imagedata', file);
      photo.save();
    });
  },

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
          onPress={this.handlePress.bind(this, photo)}
        />
      );
    }.bind(this));
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
