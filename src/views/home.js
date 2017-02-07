import React, {Component} from 'react';
import axios from 'axios';
import ListItem from '../components/list-item';

const accountURL = "https://api.guildwars2.com/v2/account"
const worldsURL = "https://api.guildwars2.com/v2/worlds"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      account: '',
      wallet: '',
      pvpstats: '',
      pvpgames: '',
      world: ''
    }    
  }
  getAccountData(key,url,state) {
    axios.get(url, {
      params: {
        access_token: key        
      }
    })
    .then((response) => {    
      this.setState({[state]:response.data});
      console.log(response);
      axios.get(worldsURL, {
        params: { 
          access_token: key,
          id: response.data.world
        }
      }) 
      .then((response) => {
        console.log(response.data.name)
        this.setState({world: response.data})
      })   
      .catch((error) => {
        console.log(error);
      })      
    })
    .catch((error) => {   
      console.log(error);     
    })      
  }
  componentDidMount() {
    this.getAccountData(this.props.token, accountURL, "account");
  }
  
  render() {
    return (
      <div>
      <div className="col-md-4"> 
        <ListItem prefix="Account Name" data={this.state.account.name} />
        <ListItem prefix="Hours played" data={(this.state.account.age) / 3600} />
        <ListItem prefix="World" data={this.state.world.name} />
      </div>
      <div className="col-md-4">
        <ListItem prefix="Created" data={this.state.account.created} />
        <ListItem prefix="Account Type" data={this.state.account.access} />
        <ListItem prefix="Fractal Level" data={this.state.account.fractal_level} />        
      </div>
      <div className="col-md-4">
        <ListItem prefix="WvW Rank" data={this.state.account.wvw_rank} />
      </div>
      </div>
    )
  }
}