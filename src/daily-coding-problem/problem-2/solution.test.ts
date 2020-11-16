import convertToProductList from './solution';

describe('given a list of integers', () => {
  it('should return correct list of products', () => {
    const list: number[] = [1, 2, 3, 4, 5];
    const expected: number[] = [120, 60, 40, 30, 24];

    const actual: number[] = convertToProductList(list);

    expect(actual).toStrictEqual(expected);
  });
});
