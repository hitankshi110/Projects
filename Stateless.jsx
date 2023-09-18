import React, { Component } from 'react';
//class based and stateless component
class Stateless extends Component {
    constructor(props){
        super(props);
        this.state={
            name:''
            
        }
    }
    render() {

       
        return (
            <div>
                <center>
                    <h2>Onchange Event(stateless)</h2>
            <input type="text" value={this.state.name} onChange={(e)=>this.setState(e.target.value)} /> <br />
            My Name is :{this.state.name} <br />

           
                </center>
                
            </div>
        );
    }
}

export default Stateless;