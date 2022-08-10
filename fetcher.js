const request = require("request");
const fs = require("fs");

const fetcher = (webAddress, locoalPath) => {
  
  request(webAddress, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
    return body
  });

  fs.writeFile(locoalPath, request, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
};

const args = process.argv.slice(2);
const firstArg = args[0];
const secArg = args[1];

fetcher(firstArg, secArg);
