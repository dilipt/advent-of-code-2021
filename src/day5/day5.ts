/* eslint-disable no-param-reassign */
import { Line } from './io';

const MAP_SIZE = 1000;

function createEmptyMap(size: number): number[][] {
  const grid = new Array<number[]>(size);
  for (let i = 0; i < size; i += 1) {
    grid[i] = new Array<number>(size);
  }
  return grid;
}

function getRangeBetween(a: number, b: number): { start: number, end: number } {
  const start = b > a ? a : b;
  const end = start === a ? b : a;
  return { start, end };
}

export function findOverlappingVents(input: Line[]): number {
  return input
    .filter((line) => line.x1 === line.x2 || line.y1 === line.y2)
    .reduce((map, line) => {
      const { x1, x2, y1, y2 } = line;
      if (x1 === x2) {
        const { start, end } = getRangeBetween(y1, y2);
        for (let i = start; i <= end; i += 1) {
          map[x1][i] = map[x1][i] ? map[x1][i] + 1 : 1;
        }
      } else if (y1 === y2) {
        const { start, end } = getRangeBetween(x1, x2);
        for (let i = start; i <= end; i += 1) {
          map[i][y1] = map[i][y1] ? map[i][y1] + 1 : 1;
        }
      }
      return map;
    }, createEmptyMap(MAP_SIZE))
    .reduce((score, line) => score + line.filter((n) => n > 1).length, 0);
}

export function findMoreOverlappingVents(input: Line[]): number {
  return input.reduce((map, line) => {
    const { x1, x2, y1, y2 } = line;
    if (x1 === x2) {
      const { start, end } = getRangeBetween(y1, y2);
      for (let i = start; i <= end; i += 1) {
        map[x1][i] = map[x1][i] ? map[x1][i] + 1 : 1;
      }
    } else if (y1 === y2) {
      const { start, end } = getRangeBetween(x1, x2);
      for (let i = start; i <= end; i += 1) {
        map[i][y1] = map[i][y1] ? map[i][y1] + 1 : 1;
      }
    } else {
      const positiveXGradient = x2 > x1;
      const positiveYGradient = y2 > y1;
      if (positiveXGradient && positiveYGradient) {
        for (let x = x1, y = y1; x <= x2 && y <= y2; x += 1, y += 1) {
          map[x][y] = map[x][y] ? map[x][y] + 1 : 1;
        }
      } else if (positiveXGradient && !positiveYGradient) {
        for (let x = x1, y = y1; x <= x2 && y1 >= y2; x += 1, y -= 1) {
          map[x][y] = map[x][y] ? map[x][y] + 1 : 1;
        }
      } else if (!positiveXGradient && positiveYGradient) {
        for (let x = x1, y = y1; x >= x2 && y <= y2; x -= 1, y += 1) {
          map[x][y] = map[x][y] ? map[x][y] + 1 : 1;
        }
      } else if (!positiveXGradient && !positiveYGradient) {
        for (let x = x1, y = y1; x >= x2 && y >= y2; x -= 1, y -= 1) {
          map[x][y] = map[x][y] ? map[x][y] + 1 : 1;
        }
      }
    }
    return map;
  }, createEmptyMap(MAP_SIZE))
    .reduce((score, line) => score + line.filter((n) => n > 1).length, 0);
}
