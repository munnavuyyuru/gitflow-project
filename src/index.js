const express = require('express');
const { createUser, getUsers } = require('./user');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'GitFlow Production App',
    version: '1.1.0',  // Version bump!
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// NEW FEATURE
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const user = createUser(name, email);
  res.status(201).json(user);
});

app.get('/users', (req, res) => {
  res.json(getUsers());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
