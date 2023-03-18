# [Sass] renderer plugin for [Hexo] using [Dart Sass]

[![npm version](https://badge.fury.io/js/hexo-renderer-dartsass-next.svg)](https://badge.fury.io/js/hexo-renderer-dartsass-next)

## Install

```sh
$ npm install hexo-renderer-dartsass-next
```

## Config

Anything specified under the key `sass` in your `_config.yml` files will be passed directly to the `sass.render()` call. Check out the [Dart Sass API docs](https://github.com/sass/dart-sass#javascript-api) for all available settings.

### \_config.yml

This project uses the [Dart Sass Compile]

```yaml
sass:
  style: expanded # "expanded" or "compressed"
```

For more options, see[Dart Sass Compile Options]

### Inheritance

The config object passed to dart sass is constructed by merging properties from
the following locations using a least-specific-first order:

1. Theme specific `_config.yml`
2. Blog root `_config.yml`
3. Since `file` is the path to be rendered, config is ignored. The same applies to data.

## Thanks

This plugin was created with reference to [KentarouTakeda/hexo-renderer-dartsass]. Thank you for publishing the nice software.

[hexo]: http://hexo.io
[sass]: http://sass-lang.com/
[dart sass]: https://sass-lang.com/dart-sass
[node-sass]: https://github.com/andrew/node-sass
[dart sass api docs]: https://github.com/sass/dart-sass#javascript-api
[dart sass compile]: https://sass-lang.com/documentation/js-api/modules#compile
[dart sass compile options]: https://sass-lang.com/documentation/js-api/interfaces/Options
[knksmith57/hexo-renderer-sass]: https://github.com/knksmith57/hexo-renderer-sass
[kentaroutakeda/hexo-renderer-dartsass]: https://github.com/KentarouTakeda/hexo-renderer-dartsass.git
