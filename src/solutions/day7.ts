const labels = [
  'A',
  'K',
  'Q',
  'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];

const labelsWithJoker = [
  'A',
  'K',
  'Q',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  'J',
];

export function getTypeStrength(hand: string[], withJoker: boolean) {
  const cards = new Map();

  const jokers = hand.reduce((js, c) => {
    if (!withJoker || c !== 'J') {
      cards.set(c, (cards.get(c) || 0) + 1);
    }
    return withJoker && c === 'J' ? js + 1 : js;
  }, 0);

  const [maxLabel] = [...cards.entries()].reduce(
    (max, card) => {
      return card[1] > max[1] ? card : max;
    },
    [null, null]
  );

  cards.set(maxLabel, cards.get(maxLabel) + jokers);

  if (cards.size === 1) {
    return 7;
  }
  if (cards.size === 2) {
    for (const [, occurrences] of cards) {
      if (occurrences === 1 || occurrences === 4) {
        return 6;
      }
      if (occurrences === 2 || occurrences === 3) {
        return 5;
      }
    }
  }
  if (cards.size === 3) {
    for (const [, occurrences] of cards) {
      if (occurrences === 3) {
        return 4;
      }
      if (occurrences === 2) {
        return 3;
      }
    }
  }
  if (cards.size === 4) {
    return 2;
  }

  return 1;
}

function sortHands(a: string, b: string, withJoker: boolean) {
  const handA = a.split(' ')[0].split('');
  const handB = b.split(' ')[0].split('');

  const typeDiff =
    getTypeStrength(handB, withJoker) - getTypeStrength(handA, withJoker);

  if (typeDiff === 0) {
    for (let i = 0; i < handA.length; i++) {
      const aIndex = withJoker
        ? labelsWithJoker.indexOf(handA[i])
        : labels.indexOf(handA[i]);
      const bIndex = withJoker
        ? labelsWithJoker.indexOf(handB[i])
        : labels.indexOf(handB[i]);

      if (aIndex < bIndex) return -1;
      if (aIndex > bIndex) return 1;
    }
  }

  return typeDiff;
}

function calculate(input: string, withJoker: boolean) {
  return input
    .split('\n')
    .sort((a, b) => sortHands(a, b, withJoker))
    .reverse()
    .reduce((sum, line, i) => {
      const bid = parseInt(line.split(' ')[1]);

      return sum + bid * (i + 1);
    }, 0);
}

export function part1(input: string) {
  return calculate(input, false);
}

export function part2(input: string) {
  return calculate(input, true);
}
