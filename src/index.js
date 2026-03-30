const express = require('express');
const { createUser, getUsers } = require('./user');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'GitFlow Production App',
    version: '1.1.1',  // Hot fix version!
    environment: process.env.NODE_ENV || 'development'
  });
});

// Enhanced health check with proper error handling
app.get('/health', (req, res) => {
  try {
    const health = {
      status: 'healthy',
      timestamp: new Date(),
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
    res.json(health);
  } catch (error) {
    res.status(500).json({ 
      status: 'unhealthy', 
      error: error.message 
    });
  }
});

// add users
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
 
  const user = createUser(name, email);
  res.status(201).json(user);
});

// get users
app.get('/users', (req, res) => {
  res.json(getUsers());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
