import React, { Component } from 'react';


/* Import data */
import letters from '../data/la_deserts.json';
var map;

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        // CREATE YOUR GOOGLE MAPS
        map = new window.google.maps.Map(
          document.getElementById('map'),
           {
                // ADD OPTIONS LIKE STYLE, CENTER, GESTUREHANDLING, ...
                center: { lat: 34.053345, lng: -118.242349 },
                zoom: 9.75,
                gestureHandling: 'greedy',
                disableDefaultUI: true
            });
        // desert strokeColor: #f45516 fillColor: #f4932c
        map.data.setStyle({
          strokeColor: "#246223",
          strokeOpacity: 0.8,
          strokeWeight: 1.5,
          fillColor: "#1B9F18",
          fillOpacity: 0.65
        });
        map.data.addGeoJson(letters)
    }


    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://maps.google.com/maps/api/js?key=' + process.env.REACT_APP_API_KEY;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);

            /* API not loaded, callback after loading*/
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })

        } else {
            /* API script already loaded */
            this.onScriptLoad()
        }
    }

    render() {
        return (
            <div id="map" className="map"  />
        );
    }
}

export default Map
