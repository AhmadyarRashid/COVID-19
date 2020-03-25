import React, {Component} from 'react';
import './index.css';

class CountryConfirmed extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='main'>
                <h4 className='title'>Confirmed Cases by Country/Region/Sovereignty</h4>
                <div>
                    <h3><b>830</b> China</h3>
                </div>
            </div>
        )
    }
}
export default CountryConfirmed;
