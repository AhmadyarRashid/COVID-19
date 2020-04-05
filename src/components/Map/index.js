import React, {Component} from 'react';
import MapComponent from './Map';
import MapFooter from './MapFooter';

class Index extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <MapComponent/>
                <MapFooter {...this.props}/>
            </div>
        )
    }
}

export default Index;
