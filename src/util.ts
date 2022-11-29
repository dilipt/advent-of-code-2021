import { readFileSync } from 'fs';
import path from 'path';

export function toNumberArray(filename: string): number[] {
  return readFileSync(path.join(__dirname, filename), { encoding: 'utf-8' })
    .split('\n')
    .map((numberStr) => parseInt(numberStr, 10));
}

export function toStringArray(filename: string): string[] {
  return readFileSync(path.join(__dirname, filename), { encoding: 'utf-8' })
    .split('\n');
}

export function toArray<T extends string>(filename: string): T[] {
  return (readFileSync(path.join(__dirname, filename), { encoding: 'utf-8' }) as T)
    .split('\n') as T[];
}
