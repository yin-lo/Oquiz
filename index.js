require('dotenv/config');
const express = require('express');
const { join } = require('path');
const session = require('express-session');
const router = require('./app/router');
const loadUser = require('./app/middlewares/loadUser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(join(__dirname, 'public')));

// Pour lire les données des formulaires, il faut ajouter ce middleware
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
}));

app.use(loadUser);

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
