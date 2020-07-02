import React, { Component } from 'react';



export default class Success extends Component{
    callFunction=(arg)=>{
     this.props.val(arg);
    }
    render(){
        return (<React.Fragment>
                <h1>WelCome to Page!</h1>

        </React.Fragment>)
    }
}