// Only for testing purposes, it helps to write tests for the functions before writing the functions themselves
// declare function checkIfGameIsPossible(line: string): boolean;
// declare function checkAllGames(lines: string): number;
// declare function calculatePowerOfCube(line: string): number;
// declare function calculateAllGames(lines: string): number;

import {
  calculateAllGames,
  calculatePowerOfCube,
  checkAllGames,
  checkIfGameIsPossible,
} from '../solutions/day2';

import { data2 } from '../data/data2';

const input1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

describe('day2', () => {
  it('should check if game is possible', () => {
    expect(
      checkIfGameIsPossible(
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
      )
    ).toStrictEqual({ id: 1, couldComplete: true });
    expect(
      checkIfGameIsPossible(
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
      )
    ).toStrictEqual({ id: 2, couldComplete: true });
    expect(
      checkIfGameIsPossible(
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
      )
    ).toStrictEqual({ id: 3, couldComplete: false });
    expect(
      checkIfGameIsPossible(
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
      )
    ).toStrictEqual({ id: 4, couldComplete: false });
    expect(
      checkIfGameIsPossible(
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
      )
    ).toStrictEqual({ id: 5, couldComplete: true });
  });

  it('should check all games', () => {
    expect(checkAllGames(input1)).toBe(8);
    expect(checkAllGames(data2)).toBe(2716);
  });

  it('should calculate power of cube', () => {
    expect(
      calculatePowerOfCube(
        'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
      )
    ).toBe(48);
    expect(
      calculatePowerOfCube(
        'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
      )
    ).toBe(12);
    expect(
      calculatePowerOfCube(
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
      )
    ).toBe(1560);
    expect(
      calculatePowerOfCube(
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
      )
    ).toBe(630);
    expect(
      calculatePowerOfCube(
        'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
      )
    ).toBe(36);
  });

  it('should calculate power of cube for all games', () => {
    expect(calculateAllGames(input1)).toBe(2286);
    expect(calculateAllGames(data2)).toBe(72227);
  });
});
