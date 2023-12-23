import { part1, part2 } from 'src/solutions/day17';

import { data17 } from '../data/data17';

const input = `2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`;

// long time to process
describe.skip('day 17', () => {
  it('part1', () => {
    expect(part1(input)).toEqual(102);
    expect(part1(data17)).toEqual(755);
  });
  it('part2', () => {
    expect(part2(input)).toEqual(94);
    expect(part2(data17)).toEqual(879);
  });
});
