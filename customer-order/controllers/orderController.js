const supabase = require('../config/supabaseClient');
const { validateOrder } = require('../validations/orderValidation');

exports.createOrder = async (req, res) => {
  const error = validateOrder(req.body);
  if (error) return res.status(400).json({ error });

  const { product_name, quantity, price, customerId } = req.body;

  const { error: dbError } = await supabase
    .from('orders')
    .insert([{ product_name, quantity, price, customer_id: customerId }]);

  if (dbError) {
    return res.status(400).json({ error: 'Invalid customer ID' });
  }

  res.status(201).json({ message: 'Order created' });
};

exports.getCustomerOrders = async (req, res) => {
  const { customerId } = req.params;

  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('customer_id', customerId);

  if (error) {
    return res.status(400).json({ error: 'Invalid customer ID' });
  }

  res.json(data);
};

exports.updateOrder = async (req, res) => {
  const { orderId } = req.params;

  const { error } = await supabase
    .from('orders')
    .update(req.body)
    .eq('id', orderId);

  if (error) {
    return res.status(400).json({ error: 'Invalid order ID' });
  }

  res.json({ message: 'Order updated' });
};

exports.deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  const { error } = await supabase
    .from('orders')
    .delete()
    .eq('id', orderId);

  if (error) {
    return res.status(400).json({ error: 'Invalid order ID' });
  }

  res.json({ message: 'Order deleted' });
};
