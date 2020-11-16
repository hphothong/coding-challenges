const convertToProductList = (list: number[]): number[] => {
  const totalProduct: number = list.reduce(
    (prev: number, current: number): number => prev * current,
    1,
  );

  return list.map((value: number): number => totalProduct / value);
};

export default convertToProductList;
