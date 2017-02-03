import React,{Component} from 'react';
import List from '../components/list';
import axios from 'axios';

const url = "https://api.guildwars2.com/v2/characters";


export default class Characters extends Component {  
  constructor() {
    super();
    this.state = {
      name: null,
    }    
  } 
  getData(key,state) {
    axios.get(url, {
      params: {
        access_token: key
      }
    })
    .then((response) => {      
      console.log(response)
      this.setState({[state]:response.data});
      
    })
    .catch((error) => {   
      console.log(error);     
    })      
  }
  componentDidMount() {
    this.getData(this.props.accessKey, "name");
  }
  render() {    
      return (          
        <div className="col-md-2">     
          <List data={this.state.name} />        
        </div>       
      )
  }
}
