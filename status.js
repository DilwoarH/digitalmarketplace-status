var request = require('request');

var status = class Status
{
    constructor()
    {
        this.runAllStatusChecks();
    }

    runAllStatusChecks()
    {
        
    }

    request( url )
    {
        request('http://www.google.com', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
            console.log('body:', body); // Print the HTML for the Google homepage. 
        });
    }
}

module.exports = status;