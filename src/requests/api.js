import axios from 'axios';

export const server = "https://api.guildwars2.com/v2/";

export function setKey(key) {
  localStorage.setItem(("key"), key);
};
  
export function getKey() {
  return localStorage.getItem('key');  
};

export function getData(url,key) {
  axios.get(url, {
      params: {
        access_token: key
      }
    })
    .then((response) => {    
      return(response);      
    })
    .catch((error) => {   
      console.log(error);     
    })      
}




  
