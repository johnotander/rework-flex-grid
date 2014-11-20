# Rework Flex

__Currently under development.__

Rework CSS plugin for generating custom flex grids.

## Installation

```
npm install --save rework-flex
```

## Usage

```javascript
var fs     = require('fs'),
    rework = require('rework'),
    flex   = require('rework-flex');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = rework(css).use(flex({
            numColumns: 12,
            units: 'rem',
            classNaming: {
              gridClass: 'g',
              rowClass: 'r',
              colClass: 'c'
            },
            mediaQueries: {
              xs: '',
              sm: '',
              md: '',
              lg: '',
              xl: ''
            }
          })).toString();
```

_Note:_ This plugin produces CSS that should be [prefixed](https://github.com/postcss/autoprefixer).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).