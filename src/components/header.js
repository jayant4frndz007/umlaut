import React, { Component } from 'react';
import './headcss.css';


export default class Header extends Component{
    callFunction=(arg)=>{
     this.props.val(arg);
    }
    render(){
        return (<React.Fragment>
                <div className="menu">
                        <ul>
                                <li onClick={this.callFunction.bind(this,'login')} >Login</li>
                                <li onClick={this.callFunction.bind(this,'signup')}>Signup</li>
                        </ul>
                </div>

        </React.Fragment>)
    }
}