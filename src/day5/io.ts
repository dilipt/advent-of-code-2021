import { readFileSync } from 'fs';
import path from 'path';

export type Line = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
};

export function parseInput(filename: string): Line[] {
  const file = readFileSync(path.join(__dirname, filename), { encoding: 'utf-8' }).split('\n');
  return file.map((line) => {
    const coords = line.split(' -> ');
    const [x1, y1] = coords[0].split(',').map((ch) => parseInt(ch, 10));
    const [x2, y2] = coords[1].split(',').map((ch) => parseInt(ch, 10));
    return {
      x1, y1, x2, y2,
    };
  });
}
