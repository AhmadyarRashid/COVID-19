import React, {Component} from 'react';
import {Col} from 'antd';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
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
                <Col span={4}>
                    <LeftBar/>
                </Col>
            </div>
        );
    }
}


export default App;
