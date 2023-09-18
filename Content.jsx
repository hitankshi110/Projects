import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            count:5
        }
    }
    render() {

        const counterInc = ()=>{
            this.setState({count:this.state.count+5})
        }
        const counterDec = ()=>{
            this.setState({count:this.state.count-5})
        }
        return (
            <div>
                <div className='Content'>
                <center>

                    <h1>Counter for Increase - Decrease</h1>
                    counter is : {this.state.count} <br />
                    <button type='button' className='Inc' onClick={counterInc}>Increase</button><br />
                    <button type='button'className='Dec' onClick={counterDec}>Decrease</button><br />

                </center>
                </div>
                
            </div>
        );
    }
}

export default Content;