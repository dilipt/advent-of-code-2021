export function depthCount(input: number[]): number {
  return input.reduce((count, curr, idx) => (
    idx !== input.length - 1 && curr - input[idx + 1] < 0
      ? count + 1
      : count
  ), 0);
}

export function slidingWindow(input: number[]): number {
  let count = 0;
  for (let i = 0; i < input.length - 1; i += 1) {
    if (i + 3 < input.length) {
      const windowA = input[i] + input[i + 1] + input[i + 2];
      const windowB = input[i + 1] + input[i + 2] + input[i + 3];
      if (windowA - windowB < 0) {
        count += 1;
      }
    }
  }
  return count;
}
