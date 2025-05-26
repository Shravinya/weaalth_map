const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
// const mysql = require('mysql');

const app = express();
const PORT = 3000;

// MySQL connection - COMMENTED OUT for deployment without DB
/*
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234567890',
  database: 'wealthmap'
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Connected to MySQL database");
});
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'wealthmap-secret',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use(express.static(path.join(__dirname)));

// POST /register - COMMENTED OUT (DB code)
/*
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.send("Email already registered.");
      }
      return res.status(500).send("Registration failed.");
    }
    res.redirect('/login.html');
  });
});
*/

// POST /login - COMMENTED OUT (DB code)
/*
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) return res.sendStatus(500);
    if (results.length > 0) {
      req.session.user = {
        email: results[0].email,
        name: results[0].name
      };
      res.redirect('/');
    } else {
      res.redirect('/login.html?error=1');
    }
  });
});
*/

// GET /user - This depends on session, but OK to keep if you want
app.get('/user', (req, res) => {
  if (req.session.user) {
    res.json({ name: req.session.user.name });
  } else {
    res.json({ name: null });
  }
});

// GET /properties - COMMENTED OUT (DB code)
/*
app.get('/properties', (req, res) => {
  const sql = "SELECT * FROM properties";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});
*/

// POST /logout - session related, safe to keep
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.sendStatus(500);
    res.clearCookie('connect.sid');
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
