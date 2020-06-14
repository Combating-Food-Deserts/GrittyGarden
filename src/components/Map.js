import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polygon } from 'google-maps-react';

var triangleCoords = [
  {lat: 25.774, lng: -80.190},
  {lat: 18.466, lng: -66.118},
  {lat: 32.321, lng: -64.757},
  {lat: 25.774, lng: -80.190}
];

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

    this.data = [
      [
        {lat: 34.055388, lng:-118.099591},
        {lat: 34.055032, lng:-118.125781},
        {lat: 34.036179, lng:-118.116002},
        {lat: 34.043338, lng:-118.101714},
      ]
    ]
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {

    return (
      <Map
        item
        xs = { 12 }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 10 }
        initialCenter = {{ lat: 33.885348, lng: -118.207343 }}
        className = "map"
      >
        {
          this.data.map((paths, idx) =>
          <Polygon
            key={Math.random(idx)}
            paths={paths}
            strokeColor="#246223"
            strokeOpacity= {0.8}
            strokeWeight= {1}
            fillColor="#1B9F18"
            fillOpacity={0.5}
          />)
        }

        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        />
        {/* <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxPenIpOC7U-TcAgPMzbsdjndf3HtnHXs'
})(GoogleMapsContainer)
