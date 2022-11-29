import { diagnose, lifeSupportRating } from './day3';
import { toStringArray } from '../util';

describe('day 3 runner', () => {
  it('should diagnose', () => {
    const input = toStringArray('./day3/input.txt');
    expect(diagnose(input)).toEqual(845186);
  });

  it('should find oxygen and co2 ratings', () => {
    const input = toStringArray('./day3/input.txt');
    expect(lifeSupportRating(input)).toEqual(4636702);
  });
});
