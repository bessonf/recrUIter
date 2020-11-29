const path = require('path');
const questionRoutes = require('./questions');

const constructorMethod = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/home.html'));
  });
  app.get('/resetpwd', (req, res) => {
    res.sendFile(path.resolve('static/resetpwd.html'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.resolve('static/signup.html'));
  });
  app.get('/login', (req, res) => {
    res.sendFile(path.resolve('static/login.html'));
  });
  app.use('/questions', questionRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;
