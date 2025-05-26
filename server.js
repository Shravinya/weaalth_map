const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Support Render's dynamic port

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

// ✅ Serve static files from "public" folder (or current folder)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.sendStatus(500);
    res.clearCookie('connect.sid');
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
