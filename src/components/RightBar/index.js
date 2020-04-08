import React, {Component} from 'react';
import {Row, Col} from 'antd';
import InfectedList from './InfectedDetails';
import GraphComponent from './Graph';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <InfectedList status={'death'} {...this.props}/>
                    </Col>
                    <Col span={12}>
                        <InfectedList status={'recoverd'} {...this.props}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <GraphComponent {...this.props}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Index;
