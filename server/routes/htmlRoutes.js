const path = require('path');

module.exports = (app) =>
  app.get('/server', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
