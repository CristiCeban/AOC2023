import { part1, part2 } from 'src/solutions/day8';

import { data8 } from 'src/data/data8';

const input1 = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

const input2 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

const input3 = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`;

describe('day8', () => {
  it('part1', () => {
    expect(part1(input1)).toEqual(2);
    expect(part1(input2)).toEqual(6);
    expect(part1(data8)).toEqual(23147);
  });
  it('part2', () => {
    expect(part2(input3)).toEqual(6);
    expect(part2(data8)).toEqual(22289513667691);
  });
});
