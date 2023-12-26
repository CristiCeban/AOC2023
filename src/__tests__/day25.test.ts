import { data25 } from '../data/data25';
import { part1 } from '../solutions/day25';

// const input = `jqt: rhn xhk nvd
// rsh: frs pzl lsr
// xhk: hfx
// cmg: qnr nvd lhk bvb
// rhn: xhk bvb hfx
// bvb: xhk hfx
// pzl: lsr hfx nvd
// qnr: nvd
// ntq: jqt hfx bvb xhk
// nvd: lhk
// lsr: lhk
// rzs: qnr cmg lsr rsh
// frs: qnr lhk lsr`;

describe.skip('day25', () => {
  it('part1', () => {
    expect(part1(data25)).toBe(54);
  });
});
