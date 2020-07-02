import React, { Component } from 'react';
import './signupcss.css';
import axios from 'axios';


export default class Signup extends Component{

    constructor(props){
        super(props);
        this.state={
            email:undefined,
            pass:undefined,
            cpass:undefined,
            num:undefined,
            message:undefined
        }
    }

    changeData=(val,e)=>{
        this.setState({[val]:e.target.value,message:undefined});
    }
    clickRegiter=()=>{
        const {email,pass,cpass,num}=this.state;
        console.log(email,pass,cpass,num);

        if(email == undefined || pass == undefined || cpass == undefined || num == undefined){
            this.setState({message:'Please fill all inputs'});
            return;
        }
        if(pass != cpass){
            this.setState({message:'Password mismatch'});
            return;
        }

        axios.post('http://localhost:5000/logindata',{
            email:email,
            pass:pass,
            num:num
        }).then((res)=>{
            this.setState({message:'Successfully Registered'});
        })

    }
    render(){
        return (<React.Fragment>
              <div className="container mycontainer">
              <div className="form-horizontal" >
  <div className="form-group">
    <label className="control-label col-sm-2" for="email">Email:</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="email" onChange={this.changeData.bind(this,'email')} placeholder="Enter email"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" for="pwd">Password:</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="pwd"  onChange={this.changeData.bind(this,'pass')} placeholder="Enter password"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" for="cpwd">Confirm Password:</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="cpwd" onChange={this.changeData.bind(this,'cpass')} placeholder="Enter confirm password"/>
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-2" for="number">Mobile :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="number" onChange={this.changeData.bind(this,'num')} placeholder="Enter Mobile number"/>
    </div>
  </div> 

  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-default" onClick={this.clickRegiter}>Register</button>
    </div>
  </div>
  <div>{this.state.message}</div>
</div>
              </div>
        </React.Fragment>)
    }
}