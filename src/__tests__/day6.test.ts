const input = `Time:      7  15   30
Distance:  9  40  200`;

import { part1, part2 } from '../solutions/day6';

import { data6 } from '../data/data6';

describe('Day 6', () => {
  it('day 6 part 1', () => {
    expect(part1(input)).toBe(288);
    expect(part1(data6)).toBe(4811940);
  });
  it('day 6 part 2', () => {
    expect(part2(input)).toBe(71503);
    expect(part2(data6)).toBe(30077773);
  });
});
