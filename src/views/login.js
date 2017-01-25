import React, { Component } from 'react';
import axios from 'axios';
import '../styles/login.css';
import {browserHistory} from 'react-router';
import {setKey} from '../storage/api';

const api = 'https://api.guildwars2.com/v2/tokeninfo';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      key: '',
      status: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleRequestResponse = this.handleRequestResponse.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1 id="login-title"> Guild Wars 2 User Interface</h1>    
        <div id="login">              
          <h1> Insert your API Key here </h1>
          <input onChange={this.handleInputChange} value={this.state.key} type="text" name="api-key" /> 
          <input type="submit" onClick={this.handleInputSubmit} value="Log-in" />   
          <div> {this.handleRequestResponse(this.state.status)} </div>       
        </div>
      </div>      
    );
  }
  handleInputChange(event) {
    this.setState({key:event.target.value});        
  }
  handleRequestResponse(status) {
    if (status === 0) {
      return <h3 id="login-failed"> Authentication error! </h3>
    } 
  }
  handleInputSubmit() {
    axios.get(api, {
      params: {
        access_token: this.state.key
      }
    })
    .then((response) => {
      if (response.status === 200) {
        console.log('Status: ' + response.status + ', request successful.');
      }     
      setKey(this.state.key);
      browserHistory.push('/home');
    })
    .catch((error) => {   
      console.log(error);
      this.setState({status:0});
    });  
  }  
  
  
}
export default Login;


