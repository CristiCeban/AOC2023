// declare function part1(input: string): number;
//

import { part1, part2 } from '../solutions/day3';

import { data3 } from '../data/data3';

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

describe('day3', () => {
  it('should solve day3 - part1', () => {
    expect(part1(input)).toBe(4361);
    expect(part1(data3)).toBe(531932);
  });
  it('should solve day3 - part2', () => {
    expect(part2(input)).toBe(467835);
    expect(part2(data3)).toBe(73646890);
  });
});
