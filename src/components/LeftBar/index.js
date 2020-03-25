import React, {Component} from 'react';
import TotalConfirmed from './TotalConfirmed';
import CountryConfirmed from './CountryConfirmed';

class Index extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <TotalConfirmed/>
                <CountryConfirmed/>
            </div>
        )
    }
}

export default Index;
