import { depthCount, slidingWindow } from './day1';
import { toNumberArray } from '../util';

describe('day 1 tests', () => {
  it('should return 1715', () => {
    const input = toNumberArray('../day1/input.txt');
    expect(depthCount(input)).toEqual(1715);
  });

  it('should sliding window', () => {
    const input = toNumberArray('../day1/input.txt');
    expect(slidingWindow(input)).toEqual(1739);
  });
});
