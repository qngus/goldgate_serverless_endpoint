'use strict';
const request = require('request');

module.exports.endpoint = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: request('https://my-json-server.typicode.com/gbandsmith/GoldGate/licenses', { json: true }, (err, resp, reqBody) => {
      if (err) { return console.log(err); }
      return resp;
  }),
  };
  callback(null,response);
};
