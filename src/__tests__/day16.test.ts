import { part1, part2 } from 'src/solutions/day16';

import { data16 } from '../data/data16';

/* eslint-disable no-useless-escape */
const input = `.|...\....
|.-.\.....
.....|-...
........|.
..........
.........\
..../.\\..
.-.-/..|..
.|....-|.\
..//.|....`;

// long test, skipping it for others
describe.skip('Day 16', () => {
  it('part 1', () => {
    expect(part1(input)).toBe(46);
    expect(part1(data16)).toBe(7623);
  });
  it('part 2', () => {
    expect(part2(input)).toBe(51);
    expect(part2(data16)).toBe(8244);
  });
});
