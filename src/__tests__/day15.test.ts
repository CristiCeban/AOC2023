import { part1, part2 } from 'src/solutions/day15';

import { data15 } from '../data/data15';

const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;

describe('Day 15', () => {
  it('part1', () => {
    expect(part1(input)).toEqual(1320);
    expect(part1(data15)).toEqual(509784);
  });
  it('part2', () => {
    expect(part2(input)).toEqual(145);
    expect(part2(data15)).toEqual(230197);
  });
});
