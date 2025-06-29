const parceCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) =>
    ['books', 'electronics', 'clothing', 'other'].includes(category);
  if (isCategory(category)) return category;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseFloat(number);
  return isNaN(parsedNumber) || parsedNumber < 0 ? undefined : parsedNumber;
};

export const parseFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;

  const parsedCategory = parceCategory(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};
