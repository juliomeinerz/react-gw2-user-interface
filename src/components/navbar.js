import React, {Component} from 'react';
import axios from 'axios';
import '../styles/navbar.css';

const api = 'https://api.guildwars2.com/v2/tokeninfo';
const key = '13A3037E-7EB7-DC46-BE0C-17F2889F797F82EEF11E-7ED1-49D6-BC09-A4A1FF00B8F3';

export default class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      options: null
    }
    this.buildMenuOptions = this.buildMenuOptions.bind(this); 
  } 
  componentWillMount() {
    return (
      axios.get(api, {
      params: {
        access_token: key
      }
      })
      .then((response) => {
        return (
          this.setState({options:response.data.permissions})
        )           
      })
      .catch((error) => {   
        console.log(error)      
      })  
    )
  }
  buildMenuOptions() {
    if(this.state.options == null) {
      return <div> Loading... </div>
    }
    else {
      return (
        <div>
          <ul className="nav navbar-nav">
            <li> <a href="/home"> Home </a> </li>
            {this.state.options.map((option) => {
              return (
                <li key={option}> <a href={option}> {option} </a> </li>
              )              
            })}
          </ul>
        </div>
      )}}  
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <img alt="logo" id="logo-img" src="favico.png" />
        </div>
        {this.buildMenuOptions()}
      </nav>
    )
  }
}
