// Convert number to currency
var currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  currency.format(2500); /* $2,500.00 */