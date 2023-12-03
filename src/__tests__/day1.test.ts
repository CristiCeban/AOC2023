// Only for testing purposes, it helps to write tests for the functions before writing the functions themselves
// declare function turnLineInto2DigitNumber(line: string): number;
// declare function turnEachLineInto2DigitNumber(lines: string): number[];
// declare function sumOf2DigitNumbers(numbers: number[]): number;
// declare function preProcess(line: string): string;

const input1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

import {
  preProcess,
  sumOf2DigitNumbers,
  turnEachLineInto2DigitNumber,
  turnLineInto2DigitNumber,
} from '../solutions/day1';

import { data1 } from '../data/data1';

describe('day1', () => {
  it('should turn line into a 2 digit number by taking the first and last integer to occur in the line', () => {
    expect(turnLineInto2DigitNumber('1abc2')).toEqual(12);
    expect(turnLineInto2DigitNumber('pqr3stu8vwx')).toEqual(38);
    expect(turnLineInto2DigitNumber('a1b2c3d4e5f')).toEqual(15);
    expect(turnLineInto2DigitNumber('treb7uchet')).toEqual(77);
    expect(turnLineInto2DigitNumber('11abc2')).toEqual(12);
  });

  it('should turn each line into a 2 digit number', () => {
    expect(turnEachLineInto2DigitNumber(input1)).toEqual([12, 38, 15, 77]);
  });

  it('correct preProcess line', () => {
    expect(preProcess('one')).toEqual('1ne');
    expect(preProcess('two')).toEqual('2wo');
    expect(preProcess('three')).toEqual('3hree');
    expect(preProcess('four')).toEqual('4our');
    expect(preProcess('five')).toEqual('5ive');
    expect(preProcess('six')).toEqual('6ix');
    expect(preProcess('seven')).toEqual('7even');
    expect(preProcess('eight')).toEqual('8ight');
    expect(preProcess('nine')).toEqual('9ine');
    expect(preProcess('one two three four five six seven eight nine')).toEqual(
      '1ne 2wo 3hree 4our 5ive 6ix 7even 8ight 9ine'
    );
  });

  it('should sum all the 2 digit numbers', () => {
    expect(sumOf2DigitNumbers(turnEachLineInto2DigitNumber(input1))).toBe(142);
    expect(sumOf2DigitNumbers(turnEachLineInto2DigitNumber(data1))).toBe(54338);
    expect(
      sumOf2DigitNumbers(turnEachLineInto2DigitNumber(data1, preProcess))
    ).toBe(53389);
  });
});
