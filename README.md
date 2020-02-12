# generator-protect-integration [![NPM version][npm-image]][npm-url]
> Protect integration project generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-protect-integration using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @ns8/generator-protect-integration
```

Then generate your new project:

```bash
yo protect-integration
```

## Developing generators

### Running the generator

At this point, you have a working generator. The next logical step would be to run it and see if it works.

Since you’re developing the generator locally, it’s not yet available as a global npm module. A global module may be created and symlinked to a local one, using npm. Here’s what you’ll want to do:

On the command line, from the root of your generator project (in the generator-name/ folder), type:

```
npm link
```

That will install your project dependencies and symlink a global module to your local file. After npm is done, you’ll be able to call yo name and you should see the this.log, defined earlier, rendered in the terminal. Congratulations, you just built your first generator!


## License

 © [ns8inc](https://ns8.com)


[npm-image]: https://badge.fury.io/js/generator-protect-integration.svg
[npm-url]: https://npmjs.org/package/generator-protect-integration
