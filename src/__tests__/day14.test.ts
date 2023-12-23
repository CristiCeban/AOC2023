import { fnv1aHash, parse, part1, part2 } from 'src/solutions/day14';

import { data14 } from '../data/data14';

const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

describe('day14', () => {
  it('fnv1a', () => {
    const parsed = parse(input);
    expect(fnv1aHash(parsed)).toBe(1569778198);

    const changeSingleChar = [
      ['.', ...parsed[0]!.slice(1)],
      ...parsed.slice(1),
    ];
    expect(fnv1aHash(changeSingleChar)).toBe(3970664259);
  });
  it('part 1', () => {
    expect(part1(input)).toEqual(136);
    expect(part1(data14)).toEqual(108614);
  });
  it('part 2', () => {
    expect(part2(input)).toEqual(64);
    expect(part2(data14)).toEqual(96447);
  });
});
