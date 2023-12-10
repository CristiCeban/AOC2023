export const uniqueArray = (array: (string | number)[]) => {
  return array.length === new Set(array).size;
};

export const uniqueNumber = (number: number) => {
  return uniqueArray(Array.from(number.toString()));
};

export const puzzleArray = (string: string) => string.split('\n');

export const stringToArray = (str: string) => Array.from(str);

export const xyToKey = (x: number, y: number) => `${x}-${y}`;
type UniqueSymbol = 'S' | '-' | '|' | 'L' | 'F' | '7' | 'J';

type Dir = 'L' | 'R' | 'U' | 'D';

interface Path {
  dir: Dir;
  symbol: UniqueSymbol;
  x: number;
  y: number;
}

const mapper: Record<string, Dir> = {
  'R-': 'R',
  RJ: 'U',
  R7: 'D',
  'L-': 'L',
  LF: 'D',
  LL: 'U',
  'U|': 'U',
  UF: 'R',
  U7: 'L',
  'D|': 'D',
  DL: 'R',
  DJ: 'L',
};

let paths: Record<string, Path> = {};

const insiders = new Set<string>();

const lookRight = (xPos: number, yPos: number) => {
  let xLoop = xPos + 1;
  while (!paths[xyToKey(xLoop, yPos)] && xLoop <= 140) {
    insiders.add(xyToKey(xLoop, yPos));
    xLoop++;
  }
};
const lookLeft = (xPos: number, yPos: number) => {
  let xLoop = xPos - 1;
  while (!paths[xyToKey(xLoop, yPos)] && xLoop >= 0) {
    insiders.add(xyToKey(xLoop, yPos));
    xLoop--;
  }
};
const lookUp = (xPos: number, yPos: number) => {
  let yLoop = yPos - 1;
  while (!paths[xyToKey(xPos, yLoop)] && yLoop >= 0) {
    insiders.add(xyToKey(xPos, yLoop));
    yLoop--;
  }
};
const lookDown = (xPos: number, yPos: number) => {
  let yLoop = yPos + 1;
  while (!paths[xyToKey(xPos, yLoop)] && yLoop <= 140) {
    insiders.add(xyToKey(xPos, yLoop));
    yLoop++;
  }
};

const generateInsiders = () => {
  Object.entries(paths).forEach(([, path]) => {
    const { symbol, dir, x, y } = path;
    if (symbol === '|' && dir === 'D') lookLeft(x, y);
    if (symbol === '|' && dir === 'U') lookRight(x, y);

    if (symbol === '-' && dir === 'L') lookUp(x, y);
    if (symbol === '-' && dir === 'R') lookDown(x, y);

    if (symbol === 'F' && dir === 'R') {
      lookRight(x, y);
      lookDown(x, y);
    }
    if (symbol === 'F' && dir === 'D') {
      lookLeft(x, y);
      lookUp(x, y);
    }

    if (symbol === 'J' && dir === 'L') {
      lookLeft(x, y);
      lookUp(x, y);
    }
    if (symbol === 'J' && dir === 'U') {
      lookRight(x, y);
      lookDown(x, y);
    }

    if (symbol === 'L' && dir === 'R') {
      lookLeft(x, y);
      lookDown(x, y);
    }
    if (symbol === 'L' && dir === 'U') {
      lookRight(x, y);
      lookUp(x, y);
    }

    if (symbol === '7' && dir === 'L') {
      lookRight(x, y);
      lookUp(x, y);
    }
    if (symbol === '7' && dir === 'D') {
      lookLeft(x, y);
      lookDown(x, y);
    }
  });
};

export function part1(input: string) {
  paths = {};
  insiders.clear();
  const rows = puzzleArray(input).map(stringToArray);

  let steps = 1;
  let y = rows.findIndex((r) => r.includes('S'));
  let x = rows[y].indexOf('S');
  // Remember to also mark the starting point S as part of the pipe
  paths[xyToKey(x, y)] = { x, y, dir: 'R', symbol: '-' };
  x++;
  let dir: Dir = 'R';

  while (rows[y][x] !== 'S') {
    paths[xyToKey(x, y)] = { x, y, dir, symbol: rows[y][x] as UniqueSymbol };
    if (dir === 'R') x++;
    else if (dir === 'L') x--;
    else if (dir === 'U') y--;
    else if (dir === 'D') y++;
    const sym = rows[y][x];
    dir = mapper[dir + sym];
    steps++;
  }

  return steps / 2;
}

export function part2(input: string) {
  paths = {};
  insiders.clear();
  const rows = puzzleArray(input).map(stringToArray);

  let steps = 1;
  let y = rows.findIndex((r) => r.includes('S'));
  let x = rows[y].indexOf('S');
  // Remember to also mark the starting point S as part of the pipe
  paths[xyToKey(x, y)] = { x, y, dir: 'R', symbol: '-' };
  x++;
  let dir: Dir = 'R';

  while (rows[y][x] !== 'S') {
    paths[xyToKey(x, y)] = { x, y, dir, symbol: rows[y][x] as UniqueSymbol };
    if (dir === 'R') x++;
    else if (dir === 'L') x--;
    else if (dir === 'U') y--;
    else if (dir === 'D') y++;
    const sym = rows[y][x];
    dir = mapper[dir + sym];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    steps++;
  }

  generateInsiders();

  return insiders.size;
}
