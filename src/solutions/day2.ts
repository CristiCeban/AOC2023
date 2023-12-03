const redMax = 12;
const greenMax = 13;
const blueMax = 14;

export function checkIfGameIsPossible(line: string) {
  const parts = line.split(': ');
  const id = parseInt(parts[0].split(' ')[1]);

  const score = line.substring(line.indexOf(':') + 1);

  const rounds = score.split(';');

  for (const round of rounds) {
    const colorsAttr = round.split(',').map((s) => s.trim().split(' '));
    const colorsMap = colorsAttr.reduce((acc, [number, color]) => {
      acc[color] = number;
      return acc;
    }, {});
    const red = parseInt(colorsMap?.['red'] ?? '0', 10);
    const green = parseInt(colorsMap?.['green'] ?? '0', 10);
    const blue = parseInt(colorsMap?.['blue'] ?? '0', 10);
    if (red > redMax || green > greenMax || blue > blueMax) {
      return { id, couldComplete: false };
    }
  }
  return { id, couldComplete: true };
}

export function calculatePowerOfCube(line: string) {
  const score = line.substring(line.indexOf(':') + 1);

  const rounds = score.split(';');

  let red_max = 1;
  let green_max = 1;
  let blue_max = 1;

  for (const round of rounds) {
    const colorsAttr = round.split(',').map((s) => s.trim().split(' '));
    const colorsMap = colorsAttr.reduce((acc, [number, color]) => {
      acc[color] = number;
      return acc;
    }, {});
    const red = parseInt(colorsMap?.['red'] ?? '0', 10);
    const green = parseInt(colorsMap?.['green'] ?? '0', 10);
    const blue = parseInt(colorsMap?.['blue'] ?? '0', 10);
    if (red > red_max) {
      red_max = red;
    }
    if (green > green_max) {
      green_max = green;
    }
    if (blue > blue_max) {
      blue_max = blue;
    }
  }
  return red_max * green_max * blue_max;
}

export function checkAllGames(lines: string) {
  const games = lines.split('\n');
  const possibleGames = games.map(checkIfGameIsPossible);
  return possibleGames
    .filter((game) => game.couldComplete)
    .reduce((acc, game) => acc + game.id, 0);
}

export function calculateAllGames(lines: string) {
  const games = lines.split('\n');
  const possibleGames = games.map(calculatePowerOfCube);
  return possibleGames.reduce((acc, game) => acc + game, 0);
}
