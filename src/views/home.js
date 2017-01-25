import React, {Component} from 'react';
import NavigationBar from '../components/navbar';
import {getKey} from '../storage/api';

const key = getKey();


export default class Home extends Component {
  
  
  render() {
    return (
      <div className="container"> 
        <NavigationBar apiKey={key} />
        
        <p>  </p>
        
        
        
      </div>
    )
  }
}