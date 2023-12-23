import { part1, part2, sumWithSpaces } from 'src/solutions/day12';

import { data12 } from '../data/data12';

const input = `#.#.### 1,1,3
.#...#....###. 1,1,3
.#.###.#.###### 1,3,1,6
####.#...#... 4,1,1
#....######..#####. 1,6,5
.###.##....# 3,2,1`;

describe('day 12', () => {
  it('sumWithSpaces', () => {
    expect(sumWithSpaces([1])).toBe(1);
    expect(sumWithSpaces([1, 1, 3])).toBe(7);
  });
  it('part 1', () => {
    expect(part1(input)).toEqual(6);
    expect(part1(data12)).toEqual(7251);
  });
  it('part 2', () => {
    expect(part2(input)).toEqual(6);
    expect(part2(data12)).toEqual(2128386729962);
  });
});
