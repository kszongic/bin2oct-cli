# @kszongic/bin2oct-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/bin2oct-cli)](https://www.npmjs.com/package/@kszongic/bin2oct-cli)
[![npm downloads](https://img.shields.io/npm/dm/@kszongic/bin2oct-cli)](https://www.npmjs.com/package/@kszongic/bin2oct-cli)
[![license](https://img.shields.io/npm/l/@kszongic/bin2oct-cli)](./LICENSE)
[![node](https://img.shields.io/node/v/@kszongic/bin2oct-cli)](https://nodejs.org)
![zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-blue)

Convert binary strings to octal from the command line. **Zero dependencies.** Works on Windows, macOS, and Linux.

```bash
$ bin2oct 11111111
377
```

## Why?

- **Quick base conversion** without opening a calculator or Python REPL
- **Pipe-friendly** - reads from stdin, outputs clean results for scripting
- **Multiple inputs** - convert a whole batch in one command
- **Zero dependencies** - installs instantly, no supply chain risk
- **Cross-platform** - same command on Windows, macOS, and Linux

## Install

```bash
npm install -g @kszongic/bin2oct-cli
```

Or run directly without installing:

```bash
npx @kszongic/bin2oct-cli 101010
```

## Usage

### Single conversion

```bash
bin2oct 101010
# 52
```

### Multiple values

```bash
bin2oct 1000 11111111 101010
# 10
# 377
# 52
```

### Pipe from stdin

```bash
echo "11010110" | bin2oct
# 326

# Convert a file of binary strings
cat binary-values.txt | bin2oct
```

## Options

| Flag | Description |
|------|-------------|
| `<binary> [binary...]` | One or more binary strings to convert |
| `-h, --help` | Show help |
| `-v, --version` | Show version |

## Recipes

### Unix file permissions

Octal is the native format for Unix permissions. Convert binary permission masks to the familiar octal notation:

```bash
# rwxr-xr-x = 111 101 101
bin2oct 111101101
# 755

# rw-r--r-- = 110 100 100
bin2oct 110100100
# 644
```

### Chained with other tools

```bash
# Convert binary to octal for use in scripts
dec2bin 255 | bin2oct
# 377
```

### Batch conversion in scripts

```bash
# Convert all binary values from a log file
grep -oP '[01]{8}' hardware-dump.log | bin2oct
```

### Quick reference table

```bash
for b in 000 001 010 011 100 101 110 111; do
  echo "$b -> $(bin2oct $b)"
done
# 000 -> 0
# 001 -> 1
# 010 -> 2
# ...
# 111 -> 7
```

### npm scripts

```json
{
  "scripts": {
    "convert": "bin2oct"
  }
}
```

## How It Works

Binary-to-octal conversion groups binary digits into sets of three (from right to left), then maps each group to its octal digit (0-7). For example:

```
Binary:  1 | 010 | 101 | 010
Grouped: 001 | 010 | 101 | 010
Octal:     1      2      5      2
Result:  12522
```

Every 3 binary digits map to exactly 1 octal digit, making octal a compact representation of binary data.

## Use Cases

- **Unix permissions** - Convert binary permission bits to octal (755, 644, etc.)
- **Embedded systems** - Work with register values and bit fields
- **Networking** - Convert binary subnet or flag fields to octal
- **Education** - Learn number systems with instant feedback
- **CTF / puzzles** - Quick base conversion during competitions

## Comparison

| Tool | Zero deps | Cross-platform | Pipe support | Multiple inputs | Install |
|------|-----------|---------------|-------------|----------------|---------|
| **bin2oct-cli** | Yes | Win/Mac/Linux | Yes | Yes | `npx @kszongic/bin2oct-cli` |
| `printf '%o'` | N/A | Unix only | Yes | Manual | Built-in (Unix) |
| Python one-liner | N/A | Yes | Manual | Manual | Requires Python |
| Online converter | N/A | Yes | No | No | Browser |
| `bc` | N/A | Unix only | Yes | Manual | Built-in (Unix) |

## Related Tools

- [dec2bin-cli](https://github.com/kszongic/dec2bin-cli) - Decimal to binary conversion
- [dec2oct-cli](https://github.com/kszongic/dec2oct-cli) - Decimal to octal conversion
- [bin2dec-cli](https://github.com/kszongic/bin2dec-cli) - Binary to decimal conversion
- [float2hex-cli](https://github.com/kszongic/float2hex-cli) - Float to hex conversion
- [hex-sum-cli](https://github.com/kszongic/hex-sum-cli) - Sum hex values

## License

MIT (c) kszongic
