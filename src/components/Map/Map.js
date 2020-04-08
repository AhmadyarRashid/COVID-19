import React, {Component} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './index.css';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lng : ''
        }
    }

    render() {
        const {lat, lng} = this.props;
        return (
            <div className='main-map'>
                <LeafletMap
                    className='map-leaflet'
                    center={[lat, lng]}
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
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[lat, lng]}>
                        <Popup>
                            <p>Country Name :<b>{this.props.selectedCountry}</b></p>
                            <p>Total Confirmed :<b>{this.props.totalConfirmed}</b></p>
                            <p>Total Deaths :<b style={{color: 'red'}}>{this.props.totalDeaths}</b></p>
                            <p>Total Recovered :<b style={{color:'green'}}>{this.props.totalRecovered}</b></p>
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        )
    }
}

export default Map;
