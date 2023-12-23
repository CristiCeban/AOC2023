import { range } from 'lodash';

export function parse(input: string) {
  return input.split(',');
}

export function part1(inputRaw: string) {
  const input = parse(inputRaw);
  return input.map(getHash).reduce((sum, curr) => sum + curr, 0);
}

export function part2(inputRaw: string) {
  const input = parse(inputRaw);
  const boxes = range(256).map(() => ({} as Record<string, number>));
  for (const lens of input) {
    if (lens.includes('-')) {
      const label = lens.substring(0, lens.length - 1);
      delete boxes[getHash(label)]![label];
    } else {
      const [label, focalLength] = lens.split('=');
      boxes[getHash(label!)]![label!] = parseInt(focalLength!);
    }
  }

  return boxes.reduce(
    (sum, box, boxIndex) =>
      sum +
      Object.values(box).reduce(
        (boxSum, focalLength, lensIndex) =>
          boxSum + (boxIndex + 1) * (lensIndex + 1) * focalLength,
        0
      ),
    0
  );
}

function getHash(input: string) {
  return input.split('').reduce((hash, char) => {
    hash = ((hash + char.charCodeAt(0)) * 17) % 256;
    return hash;
  }, 0);
}
