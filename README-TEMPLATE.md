<%- lib.renderOpening() %>

## Install

<%- await lib.renderCode('npm install kris-kringle', '', 'https://www.npmjs.com/package/kris-kringle'); %>

SMS notifications are sent using AWS SNS and requires an AWS profile to be configured.

## Usage

```
kk <configJsonFile>
```

`configJsonFile` defaults to `config.json`.

## Example

<%- await lib.renderCode(lib.fetchCode('config-example.json')) %>

Text messages:

- Hey foo! Your KK is baz. The spend is $100. Merry Christmas! 🎅🏻🎄
- Hey bar! Your KK is foo. The spend is $100. Merry Christmas! 🎅🏻🎄
- Hey baz! Your KK is bar. The spend is $100. Merry Christmas! 🎅🏻🎄

See [`src/default-config.json`](https://github.com/mattriley/kris-kringle/blob/master/src/default-config.json) for other config options.

## Architecture

<%- await lib.compose(c => lib.renderCode(c.mermaid(), 'mermaid')) %>
