let users = [{name: 'Ivan'}, {name: 'Petya'}, {name: 'Vasya'}];

const url = require('url');

exports.getUsersRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    let name = 'users';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    let response = users;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

exports.postUserRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {

        postBody = JSON.parse(body);

        users.push(postBody);
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    });
};

exports.putRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {

        postBody = JSON.parse(body);

        users = postBody;
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    });

}

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};