import { getTypeStrength, part1, part2 } from 'src/solutions/day7';

import { data7 } from '../data/data7';

const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

describe('Day 7', () => {
  it('getTypeStrength', () => {
    // five of a kind
    expect(getTypeStrength(['2', '2', '2', '2', '2'], false)).toBe(7);
    // four of a kind
    expect(getTypeStrength(['2', '2', '2', '2', '3'], false)).toBe(6);
    // three of a kind
    expect(getTypeStrength(['2', '2', '2', '3', '4'], false)).toBe(4);
    // two pairs
    expect(getTypeStrength(['2', '2', '3', '3', '4'], false)).toBe(3);
    // one pair
    expect(getTypeStrength(['2', '2', '3', '4', '5'], false)).toBe(2);
  });
  it('day7 part 1', () => {
    expect(part1(input)).toBe(6440);
    expect(part1(data7)).toBe(253933213);
  });
  it('day7 part 2', () => {
    expect(part2(input)).toBe(5905);
    expect(part2(data7)).toBe(253473930);
  });
});
