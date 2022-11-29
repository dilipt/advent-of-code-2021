import { Bingo, BingoTile } from './input-parser';

function getBoardRow(rowNum: number, board: BingoTile[]): BingoTile[] {
  return board.slice(rowNum * 5, (rowNum * 5) + 5);
}

function getBoardColumn(columnNum: number, board: BingoTile[]): BingoTile[] {
  return board.filter((tile, idx) => idx % 5 === columnNum);
}

function calculateScore(board: BingoTile[], currentDraw: number) {
  const unmarkedTotal = board
    .filter((tile) => !tile.marked)
    .reduce((acc, curr) => acc + curr.value, 0);
  return currentDraw * unmarkedTotal;
}

export function findFirstWinner({ boards, numbersToDraw }: Bingo): number {
  for (let i = 0; i < numbersToDraw.length; i += 1) {
    const currentDraw = numbersToDraw[i];
    for (let j = 0; j < boards.length; j += 1) {
      const currentBoard = boards[j];
      const matchedTile = currentBoard.find((tile) => !tile.marked && tile.value === currentDraw);
      if (matchedTile) {
        matchedTile.marked = true;
        for (let k = 0; k < 5; k += 1) {
          if (getBoardRow(k, currentBoard).every((tile) => tile.marked) || getBoardColumn(k, currentBoard).every((tile) => tile.marked)) {
            return calculateScore(currentBoard, currentDraw);
          }
        }
      }
    }
  }
  return -1;
}

export function findLastWinner({ boards, numbersToDraw }: Bingo): number {
  const movesPerBoard = boards.map((board) => {
    for (let i = 0; i < numbersToDraw.length; i += 1) {
      const currentDraw = numbersToDraw[i];
      const tileWithDraw = board.find((tile) => tile.value === currentDraw && !tile.marked);
      if (tileWithDraw) {
        tileWithDraw.marked = true;
        for (let k = 0; k < 5; k += 1) {
          if (getBoardRow(k, board).every((tile) => tile.marked) || getBoardColumn(k, board).every((tile) => tile.marked)) {
            return { board, currentDraw, timeToWin: i };
          }
        }
      }
    }
    return { board: [], currentDraw: -1, timeToWin: -1 };
  });

  const { board, currentDraw } = movesPerBoard
    .reduce((currentLastPlace, contender) => (
      currentLastPlace.timeToWin > contender.timeToWin
        ? currentLastPlace
        : contender
    ), { board: [], currentDraw: -1, timeToWin: -1 });

  return calculateScore(board, currentDraw);
}
