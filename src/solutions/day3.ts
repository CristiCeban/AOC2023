export function parseInput(rawInput: string) {
  return rawInput
    .trim()
    .split('\n')
    .map((line) => line.split(''));
}

export function isAdjacent(
  input: string[][],
  x: number,
  y: number,
  cmpFn: (val: string) => boolean
) {
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (
        (i === x && j === y) ||
        i < 0 ||
        j < 0 ||
        i >= input.length ||
        j >= input[i].length
      ) {
        continue;
      }
      if (cmpFn(input[j][i]) && isNaN(Number(input[j][i]))) {
        return `${i},${j}`;
      }
    }
  }
  return '';
}

export function solve(rawInput: string, cmpFn: (val: string) => boolean) {
  const input = parseInput(rawInput);
  const data: { [key: string]: number[] } = {};
  for (let y = 0; y < input.length; y++) {
    let currentNumber = '';
    let coords = '';
    for (let x = 0; x < input[y].length; x++) {
      if (!isNaN(Number(input[y][x]))) {
        currentNumber += input[y][x];
        const adjacent = isAdjacent(input, x, y, cmpFn);
        if (adjacent) {
          coords = adjacent;
        }
      } else {
        if (currentNumber.length > 0 && coords !== '') {
          if (!data[coords]) {
            data[coords] = [];
          }
          data[coords].push(parseInt(currentNumber));
        }
        coords = '';
        currentNumber = '';
      }
    }
    if (currentNumber.length > 0 && coords !== '') {
      if (!data[coords]) {
        data[coords] = [];
      }
      data[coords].push(parseInt(currentNumber));
    }
  }
  return data;
}

export const part1 = (rawInput: string) => {
  const data = solve(rawInput, (val) => val !== '.');
  return Object.values(data).reduce(
    (acc, coord) => coord.reduce((acc, val) => acc + val, 0) + acc,
    0
  );
};

export const part2 = (rawInput: string) => {
  const data = solve(rawInput, (val) => val === '*');
  return Object.values(data).reduce(
    (acc, gear) => (gear.length === 2 ? gear[0] * gear[1] + acc : acc),
    0
  );
};
