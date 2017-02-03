import React, {Component} from 'react';
import axios from 'axios';
import ListItem from '../components/list-item';

const url = "https://api.guildwars2.com/v2/account"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      account: '',
      wallet: '',
      pvpstats: '',
      pvpgames: ''
    }
  }
   getData(key,data,state) {
    axios.get(url, {
      params: {
        access_token: key
      }
    })
    .then((response) => {    
      this.setState({[state]:response.data});
      
    })
    .catch((error) => {   
      console.log(error);     
    })      
  }
  componentDidMount() {
    this.getData(this.props.accessKey,'', "account");
  }
   render() {
    return (
      <div>
      <div className="col-md-4"> 
        <ListItem prefix="Account name" data={this.state.account.name} />
        <ListItem prefix="Hours played" data={(this.state.account.age) / 3600} />
        <ListItem prefix="World" data={this.state.account.world} />
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