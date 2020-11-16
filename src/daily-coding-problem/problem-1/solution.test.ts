import containsSumOfK from './solution';

describe('given a populated list', () => {
  describe('when the "k" value is a combination of two of the numbers', () => {
    it('should return true', () => {
      const list: number[] = [10, 15, 3, 7];
      const k: number = 17;

      const result: boolean = containsSumOfK(list, k);

      expect(result).toBeTruthy();
    });
  });

  describe('when the "k" value is not a combination of two of the numbers', () => {
    it('should return false', () => {
      const list: number[] = [10, 15, 3, 7];
      const k: number = 26;

      const result: boolean = containsSumOfK(list, k);

      expect(result).toBeFalsy();
    });
  });
});
