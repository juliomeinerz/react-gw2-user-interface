import React, {Component} from 'react';
import NavigationBar from '../components/navbar';
import {getKey} from '../requests/api';
import axios from 'axios';

const key = getKey();
const url = "https://api.guildwars2.com/v2/";


  

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      characters: null
    }
    this.getData = this.getData.bind(this);
    this.buildList = this.buildList.bind(this);
  }   
  getData(key,data,state) {
    axios.get(url + "/" + data, {
      params: {
        access_token: key
      }
    })
    .then((response) => {
      this.setState({[state]:response.data})  
    })
    .catch((error) => {   
      return 0;      
    });  
    
  }
  componentDidMount() {    
    this.getData(key,"characters", "characters")    
  }
  buildList(data) {
    console.log(data)
    if(data === null) {
      return (
        <li> Loading... </li>         
      ) 
    }
    else {
      return (
      <ul>
        {data.map((a) => {
          console.log(a)
          return (
            <li key={a}> {a} </li>
          )
        })}
      </ul>
      ) 
    }
  }  
  render() {
    return (
      <div className="container"> 
        <NavigationBar apiKey={key} />
        {this.buildList(this.state.characters)}       
      </div>
    )
  }
}