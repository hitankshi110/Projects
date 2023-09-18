import React, { Component } from 'react';
//class based and stateless component
class AddSubButton extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render() {
        const counterAdd = ()=>{
            this.setState({count:this.state.count+1})
        }
        const counterMinus = ()=>{
            this.setState({count:this.state.count-1})
        }
        return (
            <div>
                <center>
                    <h2>Two Buttons for Increment and Decrement</h2>
                    <h3>counter is : {this.state.count} </h3><br />
                    <button type='button' className='plus' onClick={counterAdd}>Add</button><br />
                    <button type='button'className='minus' onClick={counterMinus}>Subtract</button><br />

                </center>
                
            </div>
        );
    }
}

export default AddSubButton;