type Graph = Record<string, string[]>;

export function parse(input: string) {
  const graph: Graph = {};
  input.split('\n').map((line) => {
    const [first, rest] = line.split(': ');
    rest!.split(' ').forEach((part) => {
      const firstEdges = graph[first!] || [];
      const otherEdges = graph[part] || [];
      graph[part] = [...otherEdges, first!];
      graph[first!] = [...firstEdges, part];
    });
  });
  return graph;
}

const toRemove: [string, string][] = [
  ['dlk', 'pjj'],
  ['htj', 'pcc'],
  ['bbg', 'htb'],
];

export function part1(inputRaw: string) {
  const input = parse(inputRaw);
  toRemove.forEach((edge) => removeEdge(input, edge));

  return getClusterSize(input, 'dlk') * getClusterSize(input, 'pjj');
}

function removeEdge(graph: Graph, edge: [string, string]) {
  const [a, b] = edge;
  graph[a] = graph[a]!.filter((x) => x !== b);
  graph[b] = graph[b]!.filter((x) => x !== a);
}

function getClusterSize(graph: Graph, start: string) {
  const seen = new Set<string>();
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (seen.has(current)) continue;
    seen.add(current);
    queue.push(...graph[current]!);
  }
  return seen.size;
}
