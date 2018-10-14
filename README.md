# Handlebars playground

Templating fun with [Handlebars](http://handlebarsjs.com) made with [Express Handlebars](https://github.com/ericf/express-handlebars)

##

Handlebars expressions:
* use double curly-braces: `{{ content }}`
* can contain dot-seperated paths: `{{ article.title }}`
* cannot contain any of: `whitespace` `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `{` `|` `}` `~`
* can use triple curly-braces: `{{{body}}}` if you don't want to escape an expression.

Block expressions:
* can be defined using helpers which change the context
* the helper receives an options hash which has a function `options.fn` that behaves like a normal handlebars template
* Identified with a `#` and has a closing 'mustache' of the same name preceded with `/`
`{{#list people}}{{firstName}} {{lastName}}{{/list}}`