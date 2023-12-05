const input = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

import { calculate } from '../solutions/day5';
import { data5 } from '../data/data5';

// skipping as it takes too long... ~15s
describe.skip('day5', () => {
  it('day 5 - part 1', () => {
    expect(calculate(input, true)).toEqual(35);
    expect(calculate(data5, true)).toEqual(251346198);
  });
  it('day 5 - part 2', () => {
    expect(calculate(input, false)).toEqual(46);
    expect(calculate(data5, false)).toEqual(72263011);
  });
});
