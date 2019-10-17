const axios = require('axios');

exports.handler = function(event, context, callback) {

const { API_URL, BASE_ID, API_KEY } = process.env;
const API_QUERY_URL =`${API_URL}${BASE_ID}${API_KEY}`;

// send response back to client

const send = body => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Acess-Control-Allow-Headers": "Origin, X-Request-With, Content-Type, Accept"
    }
  });
}


// API call to Airtable

const getData = () => {
  axios.get(API_QUERY_URL)
  .then(res => send(res.data))
  .catch(err => send(err));
}
 // Ensure method is GET
 if(event.httpMethod == "GET") {
   getData();
 }
}
