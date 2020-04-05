import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import MapComponent from './components/Map';
import RightComponent from './components/RightBar';
import LoadingComponent from './loader';
import axios from 'axios';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            result: {
                confirmed: '',
                payload: [],
                death: '',
                recovere: ''
            },
            selectedCountry: '',
            confirmedCountry: [],
            totalDeaths: [],
            totalRecovered: [],
            confirmedCount: '',
            deathsCounts: '',
            recoveredCounts: '',
            lastUpdated: '',
            totalRegions: ''
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:5000/getInitialData')
            .then(res => {
                let confirmedCountry = [];
                let totalDeaths = [];
                let totalRecovered = [];
                if (res.data.payload.length > 0) {
                    confirmedCountry = res.data.payload.filter((item, index) => {
                        if ((item.indexOf('deaths') < 0) && (item.indexOf('recovered') < 0) && (item.indexOf('confirmed') < 0)) {
                            return true;
                        }
                        return false;
                    });

                    totalDeaths = res.data.payload.filter(item => (item.indexOf('deaths') > -1));
                    totalRecovered = res.data.payload.filter(item => (item.indexOf('recovered') > -1));
                }

                this.setState({
                    result: res.data,
                    isLoading: true,
                    confirmedCountry,
                    totalDeaths,
                    totalRecovered,
                    confirmedCount: res.data.confirmed,
                    deathsCounts: res.data.death,
                    recoveredCounts: res.data.recovere,
                    lastUpdated: res.data.totalFigure[3],
                    totalRegions: res.data.totalFigure[4]
                })
            })
            .catch(err => {
                console.log('---- error ---', err)
            });
        // let config = {
        //     headers: {
        //         "Accept": '*/*',
        //         "Accept-Language": 'en-US,en;q=0.5',
        //         "Origin": "https://gisanddata.maps.arcgis.com",
        //         "Connection": "keep-alive",
        //         "Referer": "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html"
        //     }
        // };
        // axios
        //     .get(`https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/4/query?f=json&where=(Confirmed%3C%3E0)%20AND%20(Country_Region%3D%27Iraq%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=OBJECTID%2CConfirmed%2CLast_Update&orderByFields=Last_Update%20asc&outSR=102100&resultOffset=0&resultRecordCount=1000&cacheHint=true`,
        //         config)
        //     .then(res => {
        //         console.log('---- result ---', res);
        //     })
        //     .catch(err => {
        //         console.log('--- err ---', err);
        //     })

    }

    findSpaceIndex = text => {
        const pattern = /^[A-Za-z]+$/;
        for (var i = 0; i < text.length; i++) {
            if (text[i].match(pattern)) {
                return i;
            }
        }
    };

    handlerCountry = (total_confirmed, country_name) => {
        const totalDeaths = this.state.result.payload.filter(item => (item.indexOf('deaths') > -1) && (item.indexOf(country_name) > -1));
        const totalRecovered = this.state.result.payload.filter(item => (item.indexOf('recovered') > -1) && (item.indexOf(country_name) > -1));

        let deathsCounts = 0;
        let recoveredCounts = 0;

        for (let i = 0; i < totalDeaths.length; i++) {
            deathsCounts += Number(totalDeaths[i].substring(0, this.findSpaceIndex(totalDeaths[i]) - 1).replace(',', ''))
        }

        for (let i = 0; i < totalRecovered.length; i++) {
            recoveredCounts += Number(totalRecovered[i].substring(0, this.findSpaceIndex(totalRecovered[i]) - 1).replace(',', ''))
        }

        this.setState({
            selectedCountry: country_name,
            totalDeaths,
            totalRecovered,
            confirmedCount: total_confirmed,
            deathsCounts: Number(parseFloat(String(deathsCounts)).toFixed(2)).toLocaleString('en', {
                minimumFractionDigits: 0
            }),
            recoveredCounts: Number(parseFloat(String(recoveredCounts)).toFixed(2)).toLocaleString('en', {
                minimumFractionDigits: 0
            })
        })
    };

    render() {
        const {selectedCountry, lastUpdated, totalRegions} = this.state;
        if (this.state.isLoading) {
            return (
                <div className="App">
                    <Col span={24}>
                        <Header/>
                    </Col>
                    <Row>
                        <Col span={4}>
                            <LeftBar
                                handlerCountry={this.handlerCountry}
                                confirmed={this.state.confirmedCount}
                                data={this.state.confirmedCountry}
                                payload={this.state.result.payload}
                                selectedCountry={this.state.selectedCountry}
                                lastUpdated={lastUpdated}
                            />
                        </Col>
                        <Col span={13}>
                            <MapComponent totalRegions={totalRegions}/>
                        </Col>
                        <Col span={7}>
                            <RightComponent
                                totalDeaths={this.state.totalDeaths}
                                totalRecovered={this.state.totalRecovered}
                                deaths={this.state.deathsCounts}
                                recovered={this.state.recoveredCounts}
                            />
                        </Col>
                    </Row>
                </div>
            );
        }
        return <LoadingComponent/>;

    }
}


export default App;
