import { simulateLanternFishSchool, parseInput } from './day6';

describe('day 6 runner', () => {
  describe('setup for both parts', () => {
    const input = parseInput('input.txt');

    it('should simulate lanternfish growth', () => {
      expect(simulateLanternFishSchool(input, 80)).toEqual(391888);
    });

    it('should maybe take over the entire ocean', () => {
      expect(simulateLanternFishSchool(input, 256)).toEqual(391888);
    });
  });
});
