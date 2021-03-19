import findLowestPositiverMissingInteger from './solution';

describe('given a valid integer array', () => {
  it('should handle an empty array', () => {
    const array: number[] = [];

    const lowest: number = findLowestPositiverMissingInteger(array);

    expect(lowest).toBe(1);
  });

  it('should handle all negative numbers', () => {
    const array: number[] = [-1, -2, -3, -4];

    const lowest: number = findLowestPositiverMissingInteger(array);

    expect(lowest).toBe(1);
  })

  it('should handle negative numbers in the array', () => {
    const array: number[] = [3, 4, -1, 1];

    const lowest: number = findLowestPositiverMissingInteger(array);

    expect(lowest).toBe(2);
  });

  it('should handle zero in the array', () => {
    const array: number[] = [1, 2, 0];

    const lowest: number = findLowestPositiverMissingInteger(array);

    expect(lowest).toBe(3);
  });

  it('should handle all positive numbers', () => {
    const array: number[] = [1, 2, 3, 4]

    const lowest: number = findLowestPositiverMissingInteger(array);

    expect(lowest).toBe(5);
  })
});
