import { part1, part2 } from 'src/solutions/day18';

import { data18 } from '../data/data18';

const input = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`;

describe('day18', () => {
  it('part 1', () => {
    expect(part1(input)).toEqual(62);
    expect(part1(data18)).toEqual(53300);
  });
  it('part 2', () => {
    expect(part2(input)).toEqual(952408144115);
    expect(part2(data18)).toEqual(64294334780659);
  });
});
