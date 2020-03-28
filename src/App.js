import React, {Component} from 'react';
import {Col, Row} from 'antd';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import MapComponent from './components/Map';
import RightComponent from './components/RightBar';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Col span={24}>
                    <Header/>
                </Col>
                <Row>
                    <Col span={4}>
                        <LeftBar/>
                    </Col>
                    <Col span={13}>
                        <MapComponent/>
                    </Col>
                    <Col span={7}>
                        <RightComponent/>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default App;
