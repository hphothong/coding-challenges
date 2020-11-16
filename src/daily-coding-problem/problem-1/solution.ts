const containsSumOfK = (list: number[], k: number): boolean => {
  const differences: { [value: number]: number } = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < list.length; i++) {
    const value: number = list[i];

    if (differences[value]) {
      return true;
    }

    const difference: number = k - value;
    differences[difference] = value;
  }

  return false;
};

export default containsSumOfK;
