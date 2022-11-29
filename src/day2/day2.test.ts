import { Direction, navigate, navigateWithAim } from './day2';
import { toArray } from '../util';

describe('day 2 runners', () => {
  it('should find the final location', () => {
    const input = toArray<Direction>('day2/input.txt');
    const position = navigate(input);
    expect(position).toEqual({ horizontal: 2018, depth: 820 });
    expect(position.horizontal * position.depth).toEqual(1654760);
  });

  it('should take aim into consideration', () => {
    const input = toArray<Direction>('day2/input.txt');
    const position = navigateWithAim(input);
    expect(position).toEqual({ aim: 820, depth: 969300, horizontal: 2018 });
    expect(position.horizontal * position.depth).toEqual(1956047400);
  });
});
