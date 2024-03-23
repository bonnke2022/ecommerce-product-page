export const getTotals = (price, amount) => {
  let totalAmount = 0;
  let totalCost = 0;

  totalAmount += amount;
  totalCost += amount * price;
  return { totalAmount, totalCost };
};
