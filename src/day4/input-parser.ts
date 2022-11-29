import { readFileSync } from 'fs';
import path from 'path';

export type BingoTile = {
  value: number,
  marked: boolean,
};

export type Bingo = {
  numbersToDraw: number[],
  boards: BingoTile[][],
};

export function parseBingoInput(filename: string): Bingo {
  const fileLines = readFileSync(path.join(__dirname, filename), { encoding: 'utf-8' }).split('\n');
  const numbersToDraw = fileLines[0].split(',').map((ch) => parseInt(ch, 10));
  const boards: BingoTile[][] = [];
  let currentBoard: BingoTile[] = [];
  for (let i = 2; i < fileLines.length; i += 1) {
    if (fileLines[i].length === 0) {
      boards.push(currentBoard);
      currentBoard = [];
    } else {
      const line = fileLines[i].split(/\s+/);
      const numbers = line.filter((n) => n.length > 0).map((n) => ({
        value: parseInt(n, 10),
        marked: false,
      }));
      currentBoard = currentBoard.concat(numbers);
    }
  }

  return {
    numbersToDraw,
    boards,
  };
}
