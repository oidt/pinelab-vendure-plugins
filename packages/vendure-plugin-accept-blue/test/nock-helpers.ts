export const haydenSavedPaymentMethods = [
  {
    id: 14556,
    created_at: '2024-01-11T10:44:14.000Z',
    name: 'Hayden Zieme',
    payment_method_type: 'card',
    last4: '1118',
    avs_address: 'Testing address',
    avs_zip: '12345',
    expiry_month: 1,
    expiry_year: 2025,
    card_type: 'Visa',
  },
  {
    id: 14969,
    created_at: '2024-02-06T09:10:53.000Z',
    name: null,
    payment_method_type: 'card',
    last4: '4444',
    avs_address: null,
    avs_zip: null,
    expiry_month: 1,
    expiry_year: 2025,
    card_type: 'MasterCard',
  },
  {
    id: 15012,
    created_at: '2024-02-06T22:14:07.000Z',
    name: 'Hayden Zieme',
    payment_method_type: 'check',
    last4: '9283',
    account_number: null,
    routing_number: '011000138',
    account_type: 'Checking',
    sec_code: 'CCD',
  },
  {
    id: 15019,
    created_at: '2024-02-07T07:48:20.000Z',
    name: 'Hayden Zieme',
    payment_method_type: 'check',
    last4: '9289',
    account_number: null,
    routing_number: '011000138',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
  {
    id: 15020,
    created_at: '2024-02-07T08:00:23.000Z',
    name: 'Hayden Zieme',
    payment_method_type: 'check',
    last4: '9191',
    account_number: null,
    routing_number: '063100277',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
  {
    id: 15021,
    created_at: '2024-02-07T08:01:32.000Z',
    name: 'Hiede',
    payment_method_type: 'check',
    last4: '4567',
    account_number: null,
    routing_number: '061000052',
    account_type: 'Checking',
    sec_code: 'CCD',
  },
  {
    id: 15022,
    created_at: '2024-02-07T08:03:25.000Z',
    name: 'Hayden',
    payment_method_type: 'check',
    last4: '0',
    account_number: null,
    routing_number: '063100277',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
  {
    id: 15023,
    created_at: '2024-02-07T08:04:22.000Z',
    name: 'Hayden',
    payment_method_type: 'check',
    last4: '7514',
    account_number: null,
    routing_number: '063100277',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
  {
    id: 15024,
    created_at: '2024-02-07T08:05:06.000Z',
    name: 'Hayden',
    payment_method_type: 'check',
    last4: '8864',
    account_number: null,
    routing_number: '051000017',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
  {
    id: 15035,
    created_at: '2024-02-07T10:50:37.000Z',
    name: 'Hayden Zieme',
    payment_method_type: 'check',
    last4: '0189',
    account_number: null,
    routing_number: '071000505',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
  {
    id: 15036,
    created_at: '2024-02-07T22:14:07.000Z',
    name: 'Hayden Zieme',
    payment_method_type: 'check',
    last4: '2087',
    account_number: '49000002087',
    routing_number: '490000018',
    account_type: 'Checking',
    sec_code: 'PPD',
  },
];

export const haydenZiemeCustomerDetails = {
  id: 181937,
  identifier: 'hayden.zieme12@hotmail.com',
  customer_number: 'hayden.zieme12@hotmail.com',
  first_name: 'Hayden',
  last_name: 'Zieme',
  email: 'hayden.zieme12@hotmail.com',
  website: null,
  phone: null,
  alternate_phone: null,
  billing_info: {
    first_name: null,
    last_name: null,
    company: null,
    street: null,
    street2: null,
    state: null,
    city: null,
    zip: null,
    country: 'US',
    phone: null,
  },
  shipping_info: {
    first_name: null,
    last_name: null,
    company: null,
    street: null,
    street2: null,
    state: null,
    city: null,
    zip: null,
    country: 'US',
    phone: null,
  },
  active: true,
};

export const recurringScheduleResult = {
  id: 6014,
  created_at: '2024-02-07T23:57:55.000Z',
  customer_id: 181937,
  title: 'Subscription Laptop 13 inch 8GB',
  frequency: 'monthly',
  amount: 129900,
  prev_run_date: null,
  next_run_date: '2024-03-08',
  transaction_count: 0,
  num_left: 0,
  active: true,
  status: 'active',
  payment_method_id: 15035,
  receipt_email: 'hayden.zieme12@hotmail.com',
};

export const creditCardChargeResult = {
  version: '2.0.0',
  status: 'Approved',
  status_code: 'A',
  reference_number: 300180,
  card_type: 'MasterCard',
  last_4: '4444',
  auth_code: 'OK3395',
  auth_amount: 156380,
  avs_result:
    'No AVS response (Typically no AVS data sent or swiped transaction)',
  avs_result_code: 'NA',
  cvv2_result: 'No CVV2/CVC data available for transaction.',
  cvv2_result_code: null,
  transaction: {
    id: 300180,
    created_at: '2024-02-07T23:57:55.000Z',
    settled_date: null,
    card_details: {
      name: null,
      last4: '4444',
      expiry_month: 1,
      expiry_year: 2025,
      card_type: 'MasterCard',
      avs_street: null,
      avs_zip: null,
      auth_code: 'OK3395',
      avs_result:
        'No AVS response (Typically no AVS data sent or swiped transaction)',
      cvv_result: 'No CVV2/CVC data available for transaction.',
      bin: '5555I7',
      avs_result_code: 'NA',
      cvv_result_code: null,
      cavv_result: 'N/A',
      cavv_result_code: null,
    },
    amount_details: {
      amount: 156380,
      original_requested_amount: 156380,
      original_authorized_amount: 156380,
      tax: 0,
      surcharge: 0,
      shipping: 0,
      tip: 0,
      discount: 0,
      subtotal: 156380,
    },
    transaction_details: {
      batch_id: 18674,
      description: null,
      clerk: null,
      terminal: null,
      invoice_number: null,
      po_number: null,
      order_number: null,
      source: 'Martijn dev key',
      type: 'charge',
      reference_number: null,
      schedule_id: null,
    },
    customer: { identifier: null, email: null, fax: null, customer_id: null },
    status_details: { status: 'captured' },
    custom_fields: {},
    billing_info: {
      first_name: null,
      last_name: null,
      street: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      phone: null,
    },
    shipping_info: {
      first_name: null,
      last_name: null,
      street: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      phone: null,
    },
  },
};

export const tokenizedCreditCardChargeResult = {
  version: '2.0.0',
  status: 'Approved',
  status_code: 'A',
  reference_number: 300191,
  card_type: 'MasterCard',
  last_4: '4444',
  auth_code: 'OK4315',
  auth_amount: 156380,
  avs_result:
    'No AVS response (Typically no AVS data sent or swiped transaction)',
  avs_result_code: 'NA',
  cvv2_result: 'Match',
  cvv2_result_code: 'M',
  transaction: {
    id: 300191,
    created_at: '2024-02-08T00:00:31.000Z',
    settled_date: null,
    card_details: {
      name: null,
      last4: '4444',
      expiry_month: 1,
      expiry_year: 2025,
      card_type: 'MasterCard',
      avs_street: null,
      avs_zip: null,
      auth_code: 'OK4315',
      avs_result:
        'No AVS response (Typically no AVS data sent or swiped transaction)',
      cvv_result: 'Match',
      bin: '5555I7',
      avs_result_code: 'NA',
      cvv_result_code: 'M',
      cavv_result: 'N/A',
      cavv_result_code: null,
    },
    amount_details: {
      amount: 156380,
      original_requested_amount: 156380,
      original_authorized_amount: 156380,
      tax: 0,
      surcharge: 0,
      shipping: 0,
      tip: 0,
      discount: 0,
      subtotal: 156380,
    },
    transaction_details: {
      batch_id: 18674,
      description: null,
      clerk: null,
      terminal: null,
      invoice_number: null,
      po_number: null,
      order_number: null,
      source: 'Martijn dev key',
      type: 'charge',
      reference_number: null,
      schedule_id: null,
    },
    customer: { identifier: null, email: null, fax: null, customer_id: null },
    status_details: { status: 'captured' },
    custom_fields: {},
    billing_info: {
      first_name: null,
      last_name: null,
      street: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      phone: null,
    },
    shipping_info: {
      first_name: null,
      last_name: null,
      street: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      phone: null,
    },
  },
};

export const checkChargeResult = {
  version: '2.0.0',
  status: 'Approved',
  status_code: 'A',
  reference_number: 301221,
  auth_code: 'APPROVED',
  auth_amount: 15.8,
  transaction: {
    id: 301221,
    created_at: '2024-02-08T09:36:41.000Z',
    settled_date: null,
    check_details: {
      routing_number: '490000018',
      account_number_last4: '2087',
      account_type: 'checking',
      sec_code: 'CCD',
      returned_at: null,
      returned_code: null,
      returned_reason: null,
    },
    amount_details: {
      amount: 15.8,
      tax: 0,
      surcharge: 0,
      shipping: 0,
      tip: 0,
      discount: 0,
      subtotal: 15.8,
    },
    transaction_details: {
      batch_id: null,
      description: null,
      clerk: null,
      terminal: null,
      invoice_number: null,
      po_number: null,
      order_number: null,
      source: 'Martijn dev key',
      type: 'charge',
      reference_number: null,
      schedule_id: null,
    },
    customer: { identifier: null, email: null, fax: null, customer_id: null },
    status_details: { status: 'pending' },
    custom_fields: {},
    billing_info: {
      first_name: null,
      last_name: null,
      street: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      phone: null,
    },
    shipping_info: {
      first_name: null,
      last_name: null,
      street: null,
      street2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      phone: null,
    },
  },
};

export const mockCardTransaction = {
  id: 332988,
  created_at: '2024-04-13T01:20:00.000Z',
  settled_date: '2024-04-14',
  card_details: {
    name: 'Hayden Zieme',
    last4: '1118',
    expiry_month: 1,
    expiry_year: 2025,
    card_type: 'Visa',
    avs_street: 'Testing address',
    avs_zip: '12345',
    auth_code: '000000',
    avs_result: 'Address: Match & 5 Digit Zip: Match',
    cvv_result: 'No CVV2/CVC data available for transaction.',
    bin: '476153',
    avs_result_code: 'YYY',
    cvv_result_code: null,
    cavv_result: 'N/A',
    cavv_result_code: null,
  },
  amount_details: {
    amount: 155880,
    original_requested_amount: 155880,
    original_authorized_amount: 155880,
    tax: 0,
    surcharge: 0,
    shipping: 0,
    tip: 0,
    discount: 0,
    subtotal: 155880,
  },
  transaction_details: {
    batch_id: 21616,
    description: 'Test recurring schedule',
    clerk: null,
    terminal: null,
    client_ip: null,
    invoice_number: null,
    po_number: null,
    order_number: null,
    signature: null,
    source: 'Recurring',
    username: null,
    type: 'charge',
    reference_number: null,
    schedule_id: 6014,
  },
  customer: {
    identifier: 'hayden.zieme12@hotmail.com',
    email: 'hayden.zieme12@hotmail.com',
    fax: null,
    customer_id: 181937,
  },
  status_details: {
    status: 'settled',
  },
  custom_fields: {},
  billing_info: {
    first_name: null,
    last_name: null,
    street: null,
    street2: null,
    city: null,
    state: null,
    zip: null,
    country: 'US',
    phone: null,
  },
  shipping_info: {
    first_name: null,
    last_name: null,
    street: null,
    street2: null,
    city: null,
    state: null,
    zip: null,
    country: 'US',
    phone: null,
  },
};
