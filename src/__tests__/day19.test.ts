import { getTokens, part1, part2 } from 'src/solutions/day19';

import { data19 } from '../data/data19';

const input = `px{a<2006:qkq,m>2090:A,rfg}
pv{a>1716:R,A}
lnx{m>1548:A,A}
rfg{s<537:gd,x>2440:R,A}
qs{s>3448:A,lnx}
qkq{x<1416:A,crn}
crn{x>2662:A,R}
in{s<1351:px,qqz}
qqz{s>2770:qs,m<1801:hdj,R}
gd{a>3333:R,R}
hdj{m>838:A,pv}

{x=787,m=2655,a=1222,s=2876}
{x=1679,m=44,a=2067,s=496}
{x=2036,m=264,a=79,s=2244}
{x=2461,m=1339,a=466,s=291}
{x=2127,m=1623,a=2188,s=1013}`;

describe('Day 19', () => {
  it('parseTokens', () => {
    expect(getTokens('a<2006')).toEqual([
      { type: 'identifier', value: 'a', from: 0, to: 1 },
      { type: 'lessThan', value: '<', from: 1, to: 2 },
      { type: 'number', value: '2006', from: 2, to: 6 },
    ]);
  });
  it('part1', () => {
    expect(part1(input)).toEqual(19114);
    expect(part1(data19)).toEqual(263678);
  });
  it('part2', () => {
    expect(part2(input)).toEqual(167409079868000);
    expect(part2(data19)).toEqual(125455345557345);
  });
});
