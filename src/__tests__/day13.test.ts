import { part1, part2 } from 'src/solutions/day13';

import { data13 } from '../data/data13';

const input = `#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`;

describe('day13', () => {
  it('part1', () => {
    expect(part1(input)).toEqual(405);
    expect(part1(data13)).toEqual(35691);
  });
  it('part2', () => {
    expect(part2(input)).toEqual(400);
    expect(part2(data13)).toEqual(39037);
  });
});
