
# Protect integration project generator

## Tests

Yeoman provides nice utilities for testing that the generator does what you expect.
See https://yeoman.io/authoring/testing.html and the `__tests__` directory.


## Running the generator

To run the generator locally (i.e., not as a global npm module), from the root of your generator project (in the generator-name/ folder), type:

```
npm link
```

That will install your project dependencies and symlink a global module to your local file. After npm is done, you’ll be able to call yo name and you should see the this.log, defined earlier, rendered in the terminal. Congratulations, you just built your first generator!

## Changelog

**Developers**: for any breaking or backwards incompatible changes made to the generator, please record the version and one or more comments of what was changed into the [changelog.json](../../../../changelog.json). Add in your version as another key under `releases` and enter your comments as an array of strings. E.g:

```json
"releases": {
  "0.0.13": [
    "Support for a changelog, the key is the version and the value is an array of strings indicating what has changed"
  ]
}
```
