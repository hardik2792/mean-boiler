const bodyParser   = require('body-parser');
const path         = require('path');
const ip           = require('ip');

global.appRoot = path.resolve(__dirname);
global.appIP    = ip.address();

module.exports = (app) => {

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');    //Setting View Engine

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  // override default msg
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send({error: 'Unauthorized'});
    }
  });
};