export function part1(input: string) {
  const times = input
    .split('\n')[0]
    .trim()
    .split(' ')
    .slice(1)
    .filter(Boolean)
    .map(Number);

  const distances = input
    .split('\n')[1]
    .split(' ')
    .slice(1)
    .filter(Boolean)
    .map(Number);
  let m: number = 1;
  for (let i = 0; i < times.length; i++) {
    const t: number = times[i];
    const d: number = distances[i];
    let res: number = 0;

    for (let hold_down = 0; hold_down <= t; hold_down++) {
      const speed: number = hold_down;
      const time_remaining: number = t - hold_down;
      const distance_traveled: number = speed * time_remaining;

      if (distance_traveled > d) {
        res += 1;
      }
    }

    m *= res;
  }
  return m;
}

export function part2(input: string) {
  const time = Number(
    input
      .split('\n')[0]
      .trim()
      .split(' ')
      .slice(1)
      .filter(Boolean)
      .map(Number)
      .join('')
  );

  const distance = Number(
    input
      .split('\n')[1]
      .split(' ')
      .slice(1)
      .filter(Boolean)
      .map(Number)
      .join('')
  );
  let res = 0;

  for (let hold_down = 0; hold_down <= time; hold_down++) {
    const speed: number = hold_down;
    const time_remaining: number = time - hold_down;
    const distance_traveled: number = speed * time_remaining;

    if (distance_traveled > distance) {
      res += 1;
    }
  }
  return res;
}
