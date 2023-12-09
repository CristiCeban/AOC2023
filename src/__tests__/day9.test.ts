import { data9 } from '../data/data9';
import { solve } from 'src/solutions/day9';

const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

describe('day9.ts', () => {
  it('part 1', () => {
    expect(solve(input)).toBe(114);
    expect(solve(data9)).toBe(1987402313);
  });
  it('part 2', () => {
    expect(solve(input, true)).toBe(2);
    expect(solve(data9, true)).toBe(900);
  });
});
