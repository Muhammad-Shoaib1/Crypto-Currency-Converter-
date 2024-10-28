const bitcoinElement = document.getElementById("BitCoin");
const ethereumElement = document.getElementById("Ethereum");
const dogecoinElement = document.getElementById("dogecoin");

import { API_URL } from './config.js';

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);

    bitcoinElement.innerHTML = data.bitcoin.usd.toFixed(2);
    ethereumElement.innerHTML = data.ethereum.usd.toFixed(2);
    dogecoinElement.innerHTML = data.dogecoin.usd.toFixed(2);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });