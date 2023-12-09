function findNext(nums: number[]): number {
  const diffs: number[] = [];
  nums.forEach((num, index) => {
    if (index === nums.length - 1) return;
    diffs.push(nums[index + 1] - num);
  });
  if (diffs.some((n) => n !== 0)) {
    const diff = findNext(diffs);
    return diffs[diffs.length - 1] + diff;
  }
  return 0;
}

function parseInput(input: string) {
  return input
    .split('\n')
    .map((line) => line.split(' ').map((n) => parseInt(n, 10)));
}

export function solve(rawInput: string, isPart2 = false) {
  const input = parseInput(rawInput);
  let sum = 0;
  input.forEach((nums) => {
    const nextNum = findNext(isPart2 ? nums.reverse() : nums);
    sum += nums[nums.length - 1] + nextNum;
  });
  return sum;
}
