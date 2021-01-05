export const randomElements = (limit, max = 10) => {
  let elements = [];

  while (elements.length < limit) {
    elements.push(Math.random() * max);
  }

  return elements;
};
