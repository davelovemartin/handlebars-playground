const express = require('express');
const expresshbs = require('express-handlebars');
const app = express();

// Register Handlebars helpers
const hbs = expresshbs.create({
  defaultLayout: 'main', 
  extname: '.hbs',
  helpers: {
    'list': (items, options) => {
      let out = "<ul>";
      for(let i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
      }
      return out + "</ul>";
    }
  }
})
    

// Register Handlebars view engine
app.engine('.hbs', hbs.engine)
// Use hbs view engine
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Handlebars playground',
    article: {
      title: 'Examples of templating with handlebars'
    },
    people: [
      {firstName: "Block", lastName: "expressions"},
      {firstName: "Define", lastName: "helpers"},
      {firstName: "Change", lastName: "context"}
    ]
  });
})

app.listen(3000);