/* eslint-disable no-param-reassign */
import { readFileSync } from 'fs';
import path from 'path';

export function parseInput(filename: string): number[] {
  return readFileSync(path.join(__dirname, filename), { encoding: 'utf-8' })
    .split(',')
    .map((lanternFishAge) => parseInt(lanternFishAge, 10));
}

export function simulateLanternFishSchool(school: number[], lifetime: number) {
  for (let i = 0; i < lifetime; i += 1) {
    const schoolSize = school.length;
    for (let j = 0; j < schoolSize; j += 1) {
      if (school[j] === 0) {
        school[j] = 6;
        school.push(8);
      } else {
        school[j] -= 1;
      }
    }
  }

  return school.length;
}

export function simulateLargeSchool(school: number[]) {
  // 256 % 7

}
