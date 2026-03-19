# @kszongic/bin2oct-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/bin2oct-cli)](https://www.npmjs.com/package/@kszongic/bin2oct-cli)
[![license](https://img.shields.io/npm/l/@kszongic/bin2oct-cli)](./LICENSE)

Convert binary strings to octal from the command line. Zero dependencies.

## Install

```bash
npm install -g @kszongic/bin2oct-cli
```

## Usage

```bash
bin2oct 101010
# 52

bin2oct 11111111
# 377

bin2oct 1000 1111
# 10
# 17
```

### Pipe from stdin

```bash
echo "11010110" | bin2oct
# 326
```

## Options

| Flag | Description |
|------|-------------|
| `-h, --help` | Show help |
| `-v, --version` | Show version |

## License

MIT © kszongic
