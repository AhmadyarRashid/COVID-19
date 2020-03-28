import React, {Component} from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import './index.css';

class CountryConfirmed extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main'>
                <h4 className='title'>Confirmed Cases by Country/Region/Sovereignty</h4>
                <div className='country-list'>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>US</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>Itlay</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>Spain</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>Germany</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>Iran</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>France</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='country-detail'><b className='country-total'>830</b> <span
                            className='country-name'>China</span></h3>
                    </div>
                    <hr/>
                </div>
                <div className='title'>
                    <LeftOutlined style={{float: 'left', marginLeft: 5}}/>
                    Admin 1
                    <RightOutlined style={{float: 'right', marginRight: 5}}/>
                </div>
            </div>
        )
    }
}

export default CountryConfirmed;
