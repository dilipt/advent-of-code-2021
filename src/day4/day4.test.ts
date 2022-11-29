import { parseBingoInput } from './input-parser';
import { findFirstWinner, findLastWinner } from './day4';

describe('day 4 test runner', () => {
  it('should return the first winner', () => {
    const inputs = parseBingoInput('input.txt');
    expect(findFirstWinner(inputs)).toEqual(58838);
  });

  it('should return the final winner', () => {
    const inputs = parseBingoInput('input.txt');
    expect(findLastWinner(inputs)).toEqual(6256);
  });
});
