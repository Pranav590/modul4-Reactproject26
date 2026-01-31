exports.validateOrder = ({ product_name, quantity, price, customerId }) => {
  if (!product_name || !quantity || !price || !customerId) {
    return 'Missing required fields';
  }
  return null;
};
