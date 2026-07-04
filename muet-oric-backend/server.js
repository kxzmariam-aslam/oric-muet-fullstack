const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ===== DATABASE CONNECTION =====
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '408848a8',
  database: 'oric_pg_portal'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ Database connected successfully!');
});

// ===== API ROUTES =====

// Test Route
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true, 
    message: '✅ ORIC Backend is Working!',
    database: 'Connected to oric_pg_portal'
  });
});

// ===== PROJECTS =====
app.get('/api/projects', (req, res) => {
  db.query('SELECT * FROM projects ORDER BY id DESC', (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, projects: results });
  });
});

app.get('/api/projects/:id', (req, res) => {
  db.query('SELECT * FROM projects WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, project: results[0] });
  });
});

// ===== GRANTS =====
app.get('/api/grants', (req, res) => {
  db.query('SELECT * FROM grants ORDER BY deadline ASC', (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, grants: results });
  });
});

// ===== CONFERENCES =====
app.get('/api/conferences', (req, res) => {
  db.query('SELECT * FROM conferences ORDER BY date ASC', (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, conferences: results });
  });
});

// ===== SCHOLARSHIPS =====
app.get('/api/scholarships', (req, res) => {
  db.query('SELECT * FROM scholarships ORDER BY deadline ASC', (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, scholarships: results });
  });
});

// ===== AUTH =====
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
    const user = results[0];
    
    // Simple password check (no bcrypt for now)
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
    res.json({
      success: true,
      token: 'mock_token_' + Date.now(),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        roleName: user.roleName
      }
    });
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Test: http://localhost:${PORT}/api/test`);
  console.log(`📋 Projects: http://localhost:${PORT}/api/projects`);
  console.log(`📋 Grants: http://localhost:${PORT}/api/grants`);
  console.log(`📋 Conferences: http://localhost:${PORT}/api/conferences`);
  console.log(`📋 Scholarships: http://localhost:${PORT}/api/scholarships`);
});