# Kris Kringle

Christmas gift-giving made easy by randomising a draw and notifying players of their KK by SMS text message.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```
npm install kris-kringle
```

SMS notifications are sent using AWS SNS and requires an AWS profile to be configured.

## Usage

```
kk <configJsonFile>
```

`configJsonFile` defaults to `config.json`.

## Example

<%- await renderCode(fetchCode('config-example.json')) %>

Text messages:

- Hey foo! Your KK is baz. The spend is $100. Merry Christmas! 🎅🏻🎄
- Hey bar! Your KK is foo. The spend is $100. Merry Christmas! 🎅🏻🎄
- Hey baz! Your KK is bar. The spend is $100. Merry Christmas! 🎅🏻🎄

See [`src/default-config.json`](https://github.com/mattriley/kris-kringle/blob/master/src/default-config.json) for other config options.

## Architecture

<%- await compose(c => renderCode(c.mermaid(), 'mermaid')) %>
