# Handlebars playground

Templating fun with [Handlebars](http://handlebarsjs.com)

##

Handlebars expressions:
* use double curly-braces: `{{ content }}`
* can contain dot-seperated paths: `{{ article.title }}`
* cannot contain any of: `whitespace` `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `{` `|` `}` `~`
* can use triple curly-braces: `{{{body}}}` if you don't want to escape an expression