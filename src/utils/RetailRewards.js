/**
 * @param {integer} amount
 * @returns points earned
 */
export function getPoints(amount) {
  let points = 0;
  if (amount > 50 && amount < 100) {
    points = amount;
  } else if (amount >= 100) {
    points = (amount - 100) * 2 + 50;
  }
  return points;
}

/**
 * @param {string} 
 * @returns month 
 */
export function getMonth(num) {
  switch (parseInt(num)) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Month data missing";
  }
}


/**
 * @returns customer data
 */
export function getCustomers() {
  return fetch("http://localhost:3000/customers");
}

/**
 * @returns transaction data
 */
export function getTransactions() {
  return fetch("http://localhost:3000/transactions");
}

/**
 * @param {integer} id
 * @returns transaction id by customer
 */
export function getTransactionId(id) {
  return fetch(`http://localhost:3000/transactions/?customerId=${id}`);
}
