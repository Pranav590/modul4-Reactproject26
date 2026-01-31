const supabase = require('../config/supabaseClient');
const { validateCustomer } = require('../validations/customerValidation');

exports.registerCustomer = async (req, res) => {
  const error = validateCustomer(req.body);
  if (error) return res.status(400).json({ error });

  const { full_name, email, phone } = req.body;

  const { data, error: dbError } = await supabase
    .from('customers')
    .insert([{ full_name, email, phone }]);

  if (dbError) {
    if (dbError.code === '23505') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    return res.status(500).json({ error: dbError.message });
  }

  res.status(201).json({ message: 'Customer registered successfully' });
};

exports.deleteCustomer = async (req, res) => {
  const { customerId } = req.params;

  const { error } = await supabase
    .from('customers')
    .delete()
    .eq('id', customerId);

  if (error) {
    return res.status(400).json({ error: 'Invalid customer ID' });
  }

  res.json({ message: 'Customer and related orders deleted' });
};
