function removeFalsyValues(line: string) {
  return line.length > 0;
}

function trim(line: string) {
  return line.trim();
}

function getFirstChar(s: string) {
  return s[0];
}

function getLastChar(s: string) {
  return s[s.length - 1];
}

export function turnLineInto2DigitNumber(line: string) {
  const numbers = line.match(/\d+/g);
  const firstDigit = getFirstChar(numbers[0]);
  const lastDigit = getLastChar(numbers[numbers.length - 1]);
  return parseInt(`${firstDigit}${lastDigit}`, 10);
}

export function turnEachLineInto2DigitNumber(
  lines: string,
  preProcessor?: typeof preProcess
) {
  return lines
    .split('\n')
    .map(trim)
    .map(preProcessor ?? ((line) => line))
    .filter(removeFalsyValues)
    .map(turnLineInto2DigitNumber);
}

export function sumOf2DigitNumbers(numbers: number[]) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

export function preProcess(line: string) {
  let partialLine = '';
  const chars = line.split('');

  for (const char of chars) {
    partialLine += char;
    partialLine = partialLine
      .replace('one', '1ne')
      .replace('two', '2wo')
      .replace('three', '3hree')
      .replace('four', '4our')
      .replace('five', '5ive')
      .replace('six', '6ix')
      .replace('seven', '7even')
      .replace('eight', '8ight')
      .replace('nine', '9ine');
  }

  return partialLine;
}
