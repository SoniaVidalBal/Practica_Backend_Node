const basicAuth = require('basic-auth');

module.exports = (req, res, next) => {
    const adminUser = basicAuth(req);
    if(!adminUser || adminUser.name !== 'SoniaBootcamp' || adminUser.pass !== 'keepcoding2223'){
        res.set('WWW-Authenticate', 'Basic realm=Authorization required');
        res.sendStatus(401);
        return;
    }
    next();
}