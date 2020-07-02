import React, { Component } from 'react';
import './signupcss.css';
import axios from 'axios';



export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:undefined,
            pass:undefined,
           
            message:undefined
        }
    }

    changeData=(val,e)=>{
        this.setState({[val]:e.target.value,message:undefined});
    }
    clicklogin=()=>{
        const {email,pass}=this.state;
        

        if(email == undefined || pass == undefined ){
            this.setState({message:'Please fill all inputs'});
            return;
        }
       

        axios.get('http://localhost:5000/logindata').then((res)=>{

        console.log(res);
        
             res.data.map(data=>{
                 if(data.email == email && data.pass == pass){
                     this.setState({message:'Successfull'})
                     this.props.value();
                 }else{
                    this.setState({message:'failure'}) 
                 }
             })
        })

    }
    render(){
        return (<React.Fragment>
              <div className="container mycontainer">
                  <h3>Login</h3>
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
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-success" onClick={this.clicklogin}>login</button>
    </div>
  </div>
  <div>{this.state.message}</div>
</div>
              </div>
        </React.Fragment>)
    }
}