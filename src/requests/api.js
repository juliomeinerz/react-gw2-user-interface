import axios from 'axios';

export const url = "https://api.guildwars2.com/v2/";

export function setKey(key) {
  localStorage.setItem(("key"), key);
};
  
export function getKey() {
  return localStorage.getItem('key');  
};




  
