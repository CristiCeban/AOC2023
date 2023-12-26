import { part1, part2 } from 'src/solutions/day24';

import { data24 } from '../data/data24';

// long test
describe.skip('Day 24', () => {
  it('part1', () => {
    expect(part1(data24)).toBe(21679);
  });
  it('part2', () => {
    expect(part2(data24)).toBe(566914635762564);
  });
});
