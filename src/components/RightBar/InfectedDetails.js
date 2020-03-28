import React, {Component} from 'react';
import './index.css';

class InfectedDetails extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {status} = this.props;
        return(
            <div className='main'>
                <h4 className='title'>Total{status == 'death' ? ' Deaths' : ' Recovered'}</h4>
                <h2 className={status == 'death' ? 'total-count danger' : 'total-count success'}>450</h2>

                <div className='infected-list'>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>

                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                    <div className='list-item'>
                        <h3 className={ status == 'death' ? 'normal' : 'success'}><b>830</b>{status == 'death' ? ' deaths' : ' recovered'}</h3>
                        <p style={{marginTop: -10}}>China</p>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default InfectedDetails;
