import React, {Component} from 'react';
import {Col} from 'antd';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col span={24} className="header-bg">
                <h2 className="header-text-color">
                    Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopki...
                </h2>
            </Col>

        )
    }
}

export default Header;
