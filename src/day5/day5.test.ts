import { parseInput } from './io';
import { findOverlappingVents, findMoreOverlappingVents } from './day5';

describe('day 5 test harness', () => {
  it('should load data', () => {
    const inputs = parseInput('input.txt');
    // 720,475 -> 720,669
    expect(inputs[0].x1).toEqual(720);
    expect(inputs[0].x2).toEqual(720);
    expect(inputs[0].y1).toEqual(475);
    expect(inputs[0].y2).toEqual(669);
  });

  it('should find overlapping vents', () => {
    expect(findOverlappingVents(parseInput('input.txt'))).toEqual(7269);
  });

  it('should find more overlapping vents', () => {
    expect(findMoreOverlappingVents(parseInput('input.txt'))).toEqual(21140);
  });
});
