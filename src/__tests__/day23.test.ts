const input = `#.#####################
#.......#########...###
#######.#########.#.###
###.....#.>.>.###.#.###
###v#####.#v#.###.#.###
###.>...#.#.#.....#...#
###v###.#.#.#########.#
###...#.#.#.......#...#
#####.#.#.#######.#.###
#.....#.#.#.......#...#
#.#####.#.#.#########v#
#.#...#...#...###...>.#
#.#.#v#######v###.###v#
#...#.>.#...>.>.#.###.#
#####v#.#.###v#.#.###.#
#.....#...#...#.#.#...#
#.#########.###.#.#.###
#...###...#...#...#.###
###.###.#.###v#####v###
#...#...#.#.>.>.#.>.###
#.###.###.#.###.#.#v###
#.....###...###...#...#
#####################.#`;

import { part1, part2 } from '../solutions/day23';

import { data23 } from '../data/data23';

describe.skip('Day 23', () => {
  it('part1', () => {
    expect(part1(input)).toBe(94);
    expect(part1(data23)).toBe(2190);
  });
  it('part2', () => {
    expect(part2(input)).toBe(154);
    expect(part2(data23)).toBe(6258);
  });
});
