export const getGcd = (val1: number, val2: number) => {
    while (val2 !== 0) {
      const temp = val2;
      val2 = val1 % val2;
      val1 = temp;
    }
    return val1;
  };