import { sum, zip } from 'lodash';

type Input = string[][];

function parser(input: string): Input {
  return input.split('\n').map((l) => l.split(''));
}

function gaps(input: Input, n = 1000000, gaps = 0) {
  return input.map((row) => (row.includes('#') ? gaps : (gaps += n)));
}

function manhattanDistance([[x1, y1], [x2, y2]]: number[][]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function pairs<T>(arr: T[]): T[][] {
  return arr.flatMap((v, i) => arr.slice(i + 1).map((w) => [v, w]));
}

function points(input: Input, dx: number[], dy: number[]) {
  return input.flatMap((row, y) =>
    row.flatMap((col, x) => (col === '#' ? [[x + dx[x], y + dy[y]]] : []))
  );
}

export function part1(inputRaw: string) {
  const input = parser(inputRaw);
  const toSum = points(input, gaps(zip(...input), 1), gaps(input, 1));
  return sum(pairs(toSum).map(manhattanDistance));
}

export function part2(inputRaw: string) {
  const input = parser(inputRaw);
  const toSum = points(input, gaps(zip(...input)), gaps(input));
  return sum(pairs(toSum).map(manhattanDistance));
}
