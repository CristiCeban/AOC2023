function sum(nums: number[]) {
  return nums.reduce((a, b) => +a + b, 0);
}

export function processLine(line: string) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, values] = line.split(': ');
  const [winning, have] = values.split(' | ');
  const winningNumbers = winning.split(' ');
  const myNumbers = have.split(' ').filter(Boolean);

  const myWinningNumbers = myNumbers.filter((n) => winningNumbers.includes(n));

  return myWinningNumbers.length;
}

function processPart1Line(line: string) {
  const length = processLine(line);
  if (length == 0) {
    return 0;
  }
  return Math.pow(2, length - 1);
}

export function part1(input: string) {
  const lines = input.split('\n');

  return sum(lines.map(processPart1Line));
}

function part2MapFunction(num: number) {
  return {
    num,
    copies: 1,
  };
}

export function part2(input: string) {
  const lines = input.split('\n');

  const winningNumbers = lines.map(processLine).map(part2MapFunction);

  winningNumbers.forEach(({ num, copies }, index) => {
    for (let i = 0; i < num; i++) {
      if (winningNumbers[index + 1 + i] != null) {
        winningNumbers[index + 1 + i].copies += copies;
      }
    }
  });

  return sum(winningNumbers.map((n) => n.copies));
}
