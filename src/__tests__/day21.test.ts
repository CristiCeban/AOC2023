import {
  getDiagonalSum,
  getOptionsForInfiniteFarm,
  getStraightSum,
  parse,
  part1,
  part2,
} from '../solutions/day21';

import { data21 } from '../data/data21';

const input = `.....
.....
..S..
.....
.....`;

const input2 = `...
.S.
...`;

const input3 = `.....
.#.#.
.....
.#.#.
.....`;

describe('day21', () => {
  it('getDiagonalSum', () => {
    expect(getDiagonalSum(1, 1, 1, 'odd')).toBe(1);
    expect(getDiagonalSum(2, 1, 1, 'odd')).toBe(3);
    expect(getDiagonalSum(3, 1, 1, 'odd')).toBe(6);
    expect(getDiagonalSum(4, 1, 1, 'odd')).toBe(10);

    expect(getDiagonalSum(2, 2, 3, 'odd')).toBe(2 + 2 * 3);
    expect(getDiagonalSum(3, 2, 3, 'odd')).toBe(2 + 3 * 2 + 2 * 3);
  });
  it('getStraightSum', () => {
    expect(getStraightSum(1, 1, 1, 'odd')).toBe(1);
    expect(getStraightSum(2, 1, 1, 'odd')).toBe(2);
    expect(getStraightSum(3, 1, 1, 'odd')).toBe(3);
    expect(getStraightSum(20, 1, 1, 'odd')).toBe(20);

    expect(getStraightSum(20, 1, 10, 'odd')).toBe(110);
    expect(getStraightSum(20, 10, 10, 'odd')).toBe(200);
    expect(getStraightSum(21, 1, 10, 'odd')).toBe(111);
  });
  it('getOptionsForInfiniteFarm', () => {
    expect(getOptionsForInfiniteFarm(parse(input), 17)).toBe(324);
    expect(getOptionsForInfiniteFarm(parse(input), 20)).toBe(441);
    expect(getOptionsForInfiniteFarm(parse(input2), 5)).toBe(36);
    expect(getOptionsForInfiniteFarm(parse(input2), 7)).toBe(64);
    expect(getOptionsForInfiniteFarm(parse(input3), 17)).toBe(260);
  });
  it('part1', () => {
    expect(part1(data21)).toBe(3542);
  });
  it('part2', () => {
    expect(part2(data21)).toBe(593174122420825);
  });
});
