import { cons, car, cdr } from './solution';

describe('given a valid pair', () => {
  it('should correctly return the first value when using "car"', () => {
    const value: number = car(cons(3, 4));

    expect(value).toBe(3);
  });

  it('should correctly return the second value when using "cdr"', () => {
    const value: number = cdr(cons(3, 4));

    expect(value).toBe(4);
  });

  it('should correctly return nested values', () => {
    const list = cons(1, cons(2, cons(3, 4)));

    const value: number = car(cdr(cdr(list)));

    expect(value).toBe(3);
  });
});
