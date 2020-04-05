import React, {Component} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';
import './index.css';

class Map extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='main-map'>
                <h1 className='map-header'>World Map</h1>
                <LeafletMap
                    center={[50, 10]}
                    zoom={6}
                    maxZoom={10}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <GeoJSON
                        data={worldGeoJSON}
                        style={() => ({
                            color: '#856b97',
                            weight: 0.5,
                            fillColor: "#222222",
                            fillOpacity: 1,
                        })}
                    />
                    <Marker position={[50, 10]}>
                        <Popup>
                            Popup for any custom information.
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        )
    }
}
export default Map;
