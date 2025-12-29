---
title: RPC - Creating an action on the server
description: This page describes how to create an RPC action on the server
---

You can create RPC functions on the server like this:

```javascript
hub.rpc.add('name-of-rpc-action', ({data, reply}) => {
    /*
		The data property is the data passed to the RPC action 
	    call from the client, and can be any payload that the 
	   	client decides to pass
	*/
    const { message } = data;
    const response = 'Received your message';

    /* 
		When you reply, you want to pass a data object with
		whatever metadata you want to send to the client
	*/
    return reply({ data: { response }});
});
```

Here is a simple example of creating an RPC function for retrieving the price of a cryptocurrency.

```javascript
// Here's some example data of say cryptocurrency prices
const cryptocurrencies = {
	bitcoin: 11393.9,
	ethereum: 373.23,
	litecoin: 50.35,
};

// This simulates price movements, so that requests to the rpc
// function will return changing prices.
setInterval(() => {
	Object.keys(cryptocurrencies).forEach((currency) => {
		const movement = Math.random() > 0.5 ? 1 : -1;
		const amount = Math.random();
		cryptocurrencies[currency] += movement * amount;
	});
}, 1000);

// Here we define the function to be added as an RPC function
const getPriceFunction = ({ data, reply }) => {
	let cryptocurrency = cryptocurrencies[data.cryptocurrency];
	reply({ data: { cryptocurrency } });
};

// We then attach that function to the RPC action 'get-price'
hub.rpc.add('get-price', getPriceFunction);
```