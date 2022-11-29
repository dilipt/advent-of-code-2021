type Position = {
  horizontal: number,
  depth: number,
};

export type Direction = 'forward' | 'down' | 'up';

export function navigate(input: Direction[]): Position {
  return input.reduce((pos: Position, instruction: string) => {
    const instructionList = instruction.split(' ');
    const [direction, distance] = instructionList;
    const distanceAsInt = parseInt(distance, 10);
    switch (direction) {
      case 'forward':
        return {
          ...pos,
          horizontal: pos.horizontal + distanceAsInt,
        };
      case 'down':
        return {
          ...pos,
          depth: pos.depth + distanceAsInt,
        };
      case 'up':
        return {
          ...pos,
          depth: pos.depth - distanceAsInt,
        };
      default:
        return pos;
    }
  }, { horizontal: 0, depth: 0 });
}

type PositionWithAim = {
  horizontal: number,
  depth: number,
  aim: number,
};

export function navigateWithAim(input: string[]): PositionWithAim {
  return input.reduce((pos: PositionWithAim, instruction: string) => {
    const instructionList = instruction.split(' ');
    const [direction, distance] = instructionList;
    const distanceAsInt = parseInt(distance, 10);
    switch (direction) {
      case 'forward':
        return {
          ...pos,
          horizontal: pos.horizontal + distanceAsInt,
          depth: pos.depth + pos.aim * distanceAsInt,
        };
      case 'down':
        return {
          ...pos,
          aim: pos.aim + distanceAsInt,
        };
      case 'up':
        return {
          ...pos,
          aim: pos.aim - distanceAsInt,
        };
      default:
        return pos;
    }
  }, { horizontal: 0, depth: 0, aim: 0 });
}
