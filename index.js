const express = require('express');
const expresshbs = require('express-handlebars');
const app = express();

// Register Handlebars view engine
app.engine('.hbs', expresshbs({defaultLayout: 'main', extname: '.hbs'}))
// Use hbs view engine
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Handlebars playground',
    article: {
      title: 'Examples of templating with handlebars'
    }
  });
})

app.listen(3000);