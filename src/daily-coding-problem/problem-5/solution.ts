// @ts-nocheck

export function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

export function car(value) {
  return typeof value === 'function'
    ? value((a) => a)
    : value;
}

export function cdr(value) {
  return typeof value === 'function'
    ? value((_, b) => b)
    : value;
}
