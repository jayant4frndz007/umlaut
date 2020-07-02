import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Signup from './components/signup';
import Login from './components/login';
import Success from './components/success';

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    toggle:true,
    newToggle:false
  }
  }
  checkAuth=()=>{
    console.log('calling');
    this.setState({newToggle:true})
  }
  toggleFunc=(val)=>{
     if(val == 'login'){
       this.setState({toggle:true});
     }else{
      this.setState({toggle:false});
     }
  }
  render(){

    if(this.state.newToggle){
     return  <Success/>
    }else{

    
    return (
      <div className="App">
        
        <Header val={this.toggleFunc}/>
        
        {this.state.toggle && <Login value={this.checkAuth}/>}
        {!this.state.toggle && <Signup/>}
      </div>
    );
  }
}
}

export default App;
