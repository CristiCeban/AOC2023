import { part1, part2 } from 'src/solutions/day10';

import { data10 } from '../data/data10';

describe('day10', () => {
  it('part1', () => {
    expect(part1(data10)).toEqual(6783);
  });

  it('part2', () => {
    expect(part2(data10)).toEqual(495);
  });
});
