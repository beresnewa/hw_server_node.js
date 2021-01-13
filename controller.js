const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    let service = require('./servise.js');
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/users') {
        switch (req.method) {
            case 'GET': 
                console.log('Request Type:' +
                req.method + ' Endpoint: ' +
                reqUrl.pathname);

                service.getUsersRequest(req, res);
                break;

            case 'POST':
                console.log('Request Type:' +
                req.method + ' Endpoint: ' +
                reqUrl.pathname);
    
                service.postUserRequest(req, res); 
                break;

            case 'PUT':
                console.log('Request Type:' +
                req.method + ' Endpoint: ' +
                reqUrl.pathname);

                service.putRequest(req, res); 
                break;

            default: 
                console.log('Invalid Request Type:' +
                req.method + ' Endpoint: ' +
                reqUrl.pathname);
                service.invalidRequest(req, res);
        }

    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        service.invalidRequest(req, res); //invalid routes
    }
    
})