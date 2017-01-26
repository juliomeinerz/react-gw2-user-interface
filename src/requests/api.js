import axios from 'axios';

const url = "https://api.guildwars2.com/v2/";

export function setKey(key) {
  localStorage.setItem(("key"), key);
};
  
export function getKey() {
  return localStorage.getItem('key');  
};

export function getData(key,data,state) {
  axios.get(url + "/" + data, {
      params: {
        access_token: key
      }
    })
    .then((response) => {    
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {   
      return 0;      
    });  
  }  


  
