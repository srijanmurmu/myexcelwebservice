const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load user data
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'users_data.json'), 'utf8'));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'User Management API',
    version: '1.0.0',
    endpoints: {
      'GET /api/users': 'Get all users',
      'GET /api/users/:id': 'Get user by ExternalID',
      'GET /api/users/search': 'Search users (query params: name, department, email)',
      'GET /api/stats': 'Get statistics about users'
    }
  });
});

// Get all users
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    count: usersData.length,
    data: usersData
  });
});

// Get user by ExternalID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersData.find(u => u.ExternalID === userId);
  
  if (user) {
    res.json({
      success: true,
      data: user
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
});

// Search users
app.get('/api/users/search', (req, res) => {
  const { name, department, email, userType } = req.query;
  
  let results = [...usersData];
  
  if (name) {
    const searchName = name.toLowerCase();
    results = results.filter(u => 
      (u.GivenName && u.GivenName.toLowerCase().includes(searchName)) ||
      (u.FamilyName && u.FamilyName.toLowerCase().includes(searchName)) ||
      (u.DisplayName && u.DisplayName.toLowerCase().includes(searchName))
    );
  }
  
  if (department) {
    results = results.filter(u => 
      u.Department && u.Department.toLowerCase().includes(department.toLowerCase())
    );
  }
  
  if (email) {
    results = results.filter(u => 
      u.Email && u.Email.toLowerCase().includes(email.toLowerCase())
    );
  }
  
  if (userType) {
    results = results.filter(u => 
      u.userType && u.userType.toLowerCase() === userType.toLowerCase()
    );
  }
  
  res.json({
    success: true,
    count: results.length,
    data: results
  });
});

// Get statistics
app.get('/api/stats', (req, res) => {
  const stats = {
    totalUsers: usersData.length,
    departments: [...new Set(usersData.map(u => u.Department).filter(Boolean))],
    userTypes: [...new Set(usersData.map(u => u.userType).filter(Boolean))],
    countries: [...new Set(usersData.map(u => u.Country).filter(Boolean))]
  };
  
  res.json({
    success: true,
    data: stats
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});
