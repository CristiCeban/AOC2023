// not optimized, but it works, refactor it later (or never)
// it's taking ~15 seconds to run both parts...
// easter egg -https://www.youtube.com/watch?v=SETnK2ny1R0
// easter egg 2x - https://www.youtube.com/watch?v=dQw4w9WgXcQ
export function calculate(inputRaw: string, partOne: boolean) {
  const input = inputRaw.split(/\r?\n/);

  const seeds = input[0].split(': ')[1].split(' ').map(parseInt);

  const maps: number[][][] = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i] === '') {
      maps.push([]);
    } else if (!input[i].includes(':')) {
      maps[maps.length - 1].push(input[i].split(' ').map(parseInt));
    }
  }

  if (partOne) {
    return seeds.map((seed) => toLocation(seed, maps)).sort((a, b) => a - b)[0];
  }

  let location = 0;
  let seed = toSeed(location++, maps);
  while (!seedExists(seed, seeds)) {
    seed = toSeed(location++, maps);
  }
  return toLocation(seed, maps);
}

export function toLocation(seed: number, maps: number[][][]) {
  maps.forEach((m) => {
    seed = correspond(seed, m);
  });
  return seed;
}

export function correspond(n: number, m: number[][]) {
  for (let i = 0; i < m.length; i++) {
    if (n >= m[i][1] && n < m[i][1] + m[i][2]) return n - m[i][1] + m[i][0];
  }
  return n;
}

export function seedExists(seed: number, seeds: number[]) {
  for (let i = 0; i < seeds.length; i += 2) {
    if (seed >= seeds[i] && seed < seeds[i] + seeds[i + 1]) return true;
  }
  return false;
}

export function toSeed(location: number, maps: number[][][]) {
  for (let i = maps.length - 1; i >= 0; i--) {
    location = reverse(location, maps[i]);
  }
  return location;
}

export function reverse(n: number, m: number[][]) {
  for (let i = 0; i < m.length; i++) {
    if (n >= m[i][0] && n < m[i][0] + m[i][2]) return n + m[i][1] - m[i][0];
  }
  return n;
}
