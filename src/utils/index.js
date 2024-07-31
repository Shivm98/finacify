// Utility function to format large numbers
export const formatNumber = (num) => {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(2)} Cr`;
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(2)} Lac`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}k`;
  }
  return num.toFixed(2);
};

// Utility function to add commas to numbers
export const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
