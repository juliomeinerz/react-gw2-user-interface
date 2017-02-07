import React,{Component} from 'react';
import List from '../components/list';
import axios from 'axios';
import '../styles/characters.css';

const charactersURL = "https://api.guildwars2.com/v2/characters";

export default class Characters extends Component {  
  constructor() {
    super();
    this.state = {
      characters: []
    }
    this.getCharactersData = this.getCharactersData.bind(this);
  } 
  getCharactersData(key) {
    axios.get(charactersURL, {
      params: {
        access_token: key
      }
    })
    .then((response) => {      
      response.data.map((character) => {
        return (
          axios.get(charactersURL + "/" + character, {
          params: {
            access_token: key
          }
        })
        .then((response) => {
          this.setState({characters: this.state.characters.concat([response.data])})         
        })
        .catch((error) => {
          console.log(error)
        })        
      )})     
    })      
    .catch((error) => {   
      console.log(error);     
    })      
  }
  componentDidMount() {
    this.getCharactersData(this.props.token);
  }
  render() {    
      return (          
        <div>  
          <List character={this.state.characters} />
        </div>       
      )
  }
}
