import { part1, part2 } from 'src/solutions/day20';

import { data20 } from '../data/data20';

const input1 = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`;

const input2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`;

describe('day20', () => {
  it('part1', () => {
    expect(part1(input1)).toBe(32000000);
    expect(part1(input2)).toBe(11687500);
    expect(part1(data20)).toBe(825896364);
  });
  it('part2', () => {
    expect(part2(data20)).toBe(243566897206981);
  });
});
