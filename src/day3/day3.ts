export function diagnose(input: string[]): number {
  const bitCounts = input
    .reduce((counts, diagnostic) => diagnostic
      .split('')
      .reduce((totals, bit, idx) => {
        const result = [...totals];
        result[idx] = bit === '1' ? result[idx] + 1 : result[idx];
        return result;
      }, counts), Array<number>(input[0].length).fill(0));
  const gammaRateStr = bitCounts.map((count) => (count * 2 > input.length ? '1' : '0'));
  const epsilonRateStr = gammaRateStr.map((bit) => (bit === '1' ? '0' : '1'));

  return parseInt(gammaRateStr.join(''), 2) * parseInt(epsilonRateStr.join(''), 2);
}

type Bit = '0' | '1';

const other = (b: Bit): Bit => (b === '1' ? '0' : '1');

function filterByBit(input: string[], i: number, bit: '0' | '1'): string[] {
  const onesCount = input.reduce((count, line) => (line.charAt(i) === '1' ? count + 1 : count), 0);
  return onesCount * 2 >= input.length
    ? input.filter((line) => line.charAt(i) === bit)
    : input.filter((line) => line.charAt(i) === other(bit));
}

export function lifeSupportRating(input: string[]): number {
  let oxygenFilter = [...input];
  let co2Filter = [...input];

  for (let i = 0; i < input[0].length; i += 1) {
    if (oxygenFilter.length !== 1) {
      oxygenFilter = filterByBit(oxygenFilter, i, '1');
    }

    if (co2Filter.length !== 1) {
      co2Filter = filterByBit(co2Filter, i, '0');
    }
  }

  return parseInt(oxygenFilter[0], 2) * parseInt(co2Filter[0], 2);
}
