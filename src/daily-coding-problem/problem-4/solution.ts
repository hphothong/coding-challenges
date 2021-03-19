/* eslint-disable no-param-reassign */
function sortPositiveNumbers(array: number[]): number {
  let i: number = 0;
  for (let j: number = 0; j < array.length; j++) {
    if (array[j] > 0) {
      const value: number = array[i];
      array[i] = array[j];
      array[j] = value;
      i += 1;
    }
  }
  return i;
}

function findLowestPositiverMissingInteger(array: number[]): number {
  const length: number = sortPositiveNumbers(array);

  for (let i: number = 0; i < length; i++) {
    const index: number = Math.abs(array[i]) - 1;
    if (index >= 0 && index < length && array[index] > 0) {
      array[index] = -array[index];
    }
  }

  for (let i: number = 0; i < length; i++) {
    if (array[i] > 0) {
      return i + 1;
    }
  }

  return length + 1;
}

export default findLowestPositiverMissingInteger;
