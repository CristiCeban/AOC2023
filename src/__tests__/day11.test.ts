import { part1, part2 } from 'src/solutions/day11';

import { data11 } from '../data/data11';

const input = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

describe('Day 11', () => {
  it('part 1', () => {
    expect(part1(input)).toBe(374);
    expect(part1(data11)).toBe(10313550);
  });
  it('part 2', () => {
    // expect(part2(input)).toBe(8410);
    expect(part2(data11)).toBe(611998701561);
  });
});
