import React, {Component} from 'react';
import {Row, Col} from 'antd';
import InfectedList from './InfectedDetails';
import GraphComponent from './Graph';

class Index extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <Row>
                    <Col span={12}>
                        <InfectedList status={'death'}/>
                    </Col>
                    <Col span={12}>
                        <InfectedList status={'recoverd'}/>
                    </Col>
                </Row>
                <GraphComponent/>
            </div>
        )
    }
}

export default Index;
