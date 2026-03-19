#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  console.log(`Usage: bin2oct <binary> [binary...]

Convert binary strings to octal.

Examples:
  bin2oct 101010        → 52
  bin2oct 11111111      → 377
  bin2oct 1000 1111     → 10 17

Options:
  -h, --help      Show this help
  -v, --version   Show version`);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  console.log(require('./package.json').version);
  process.exit(0);
}

let stdin = '';

function convert(inputs) {
  for (const input of inputs) {
    const trimmed = input.trim();
    if (!trimmed) continue;
    if (!/^[01]+$/.test(trimmed)) {
      console.error(`Error: "${trimmed}" is not a valid binary string`);
      process.exit(1);
    }
    const decimal = BigInt('0b' + trimmed);
    console.log(decimal.toString(8));
  }
}

if (args.length > 0 && !args.every(a => a === '-')) {
  convert(args.filter(a => a !== '-'));
} else {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => { stdin += chunk; });
  process.stdin.on('end', () => {
    convert(stdin.split(/\s+/).filter(Boolean));
  });
}
