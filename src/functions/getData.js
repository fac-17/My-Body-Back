const axios = require('axios');

exports.handler = function(event, context, callback) => {

const API_URL = "https://api.airtable.com/v0/appaxMuUrlv5A04Y6/Table%201?";
const API_KEY ="keypHN8V7C2eXXyTU";

const API_QUERY_URL =`${API_URL}api_key=${API_KEY}`;

// send response back to client

const send = body => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  });
}
}

// API call to Airtable
