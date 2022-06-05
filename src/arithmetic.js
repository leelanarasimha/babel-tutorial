export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3000);
  });
};
