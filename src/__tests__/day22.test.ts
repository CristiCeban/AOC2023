import {
  collidesInPlane,
  deserializeBrick,
  part1,
  part2,
} from 'src/solutions/day22';

import { data22 } from '../data/data22';

const input = `1,0,1~1,2,1
0,0,2~2,0,2
0,2,3~2,2,3
0,0,4~0,2,4
2,0,5~2,2,5
0,1,6~2,1,6
1,1,8~1,1,9`;

function doBrickCollide(brick: string, other: string) {
  return collidesInPlane(deserializeBrick(brick), deserializeBrick(other));
}
describe('day22', () => {
  it('collidesInPlane', () => {
    expect(doBrickCollide('1,0,1~1,2,1', '0,0,1~2,0,1')).toBe(true);
    expect(doBrickCollide('0,0,1~2,0,1', '1,0,1~1,2,1')).toBe(true);
  });
  it('part1', () => {
    expect(part1(input)).toBe(5);
    expect(part1(data22)).toBe(461);
  });

  it('part2', () => {
    expect(part2(input)).toBe(7);
    expect(part2(data22)).toBe(74074);
  });
});
