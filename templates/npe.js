const generateNPE = (
  amount,
  name,
  code,
  type,
  provider_account_number,
  date_and_time_of_payment,
  telephone,
  dui,
  service,
  transaction_id,
  status
) => `
  <html>
    <head>
      <title>NPE/CDB Receipt</title>
    </head>
    <body>
      <h1>Hello ${name}</h1>
      <ul>
      <li>name of the provider being payed: Banco Agricola</li>

      <li>Amount paid: $${amount}</li>

      <li>Name of the person paying: ${name}</li>

      <li>Code used to pay: ${code}</li>

      <li>Type of code - NPE or CDB: ${type}</li>

      <li>provider account number: ${provider_account_number}</li>

      <li>date and time of payment: ${date_and_time_of_payment}</li>

      <li>telephone: ${telephone}</li>

      <li>DUI/PAS: ${dui}</li>

      <li>Service being paid for: ${service}</li>

      <li>Transaction ID (AP): ${transaction_id}</li>

      <li>Status of the TX: ${status}</li>
      </ul>
    </body>
  </html>
`;
module.exports = generateNPE;
