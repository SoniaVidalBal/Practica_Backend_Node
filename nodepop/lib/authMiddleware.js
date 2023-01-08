const basicAuth = require('basic-auth');

module.exports = (req, res, next) => {
    const adminUser = basicAuth(req);
    if(!adminUser || adminUser.name !== 'Keepcoding' || adminUser.pass !== 'Bootcamp'){
        res.set('WWW-Authenticate', 'Basic realm=Authorization required');
        res.sendStatus(401);
        return;
    }
    next();
}