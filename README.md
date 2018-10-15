# Handlebars playground

Templating fun with [Handlebars](http://handlebarsjs.com) made with [Express Handlebars](https://github.com/ericf/express-handlebars)

## Handlebars expressions:
* use double curly-braces: `{{ content }}`
* can contain dot-seperated paths: `{{ article.title }}`
* cannot contain any of: `whitespace` `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `{` `|` `}` `~`
* can use triple curly-braces: `{{{body}}}` if you don't want to escape an expression.

Block expressions:
* the helper receives an options hash which has a function `options.fn` that behaves like a normal handlebars template
* Identified with a `#` and has a closing 'mustache' of the same name preceded with `/`
`{{#list people}}{{firstName}} {{lastName}}{{/list}}`
* helpers can be defined with a context eg.
    Handlebars.registerHelper('bold', function(options) {
      return new Handlebars.SafeString(
          '<div class="mybold">'
          + options.fn(this)
          + '</div>');
      })
* or context can be passed into a helper:
    <div class="entry">
      <h1>{{title}}</h1>
      {{#with story}}
      <div class="intro">{{{intro}}}</div>
      <div class="body">{{{body}}}</div>
      {{/with}}
    </div>
    Handlebars.registerHelper('with', function(context, options) {
      return options.fn(context);
    })
