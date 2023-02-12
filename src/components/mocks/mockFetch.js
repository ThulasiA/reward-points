const customerData = [
  {
    "customerId": 1,
    "name": "Alfa "
  },
  {
    "customerId": 2,
    "name": "Bravo"
  },
  {
    "customerId": 3,
    "name": "Charlie"
  },
];

const transactions = [
  {
    "transactionId": 1,
    "customerId": 1,
    "amount": 200,
    "date": "1-15-2023"
  },
];

const customerDataById = [
  {
    "transactionId": 1,
    "customerId": 1,
    "amount": 200,
    "date": "1-15-2023"
  },
  {
    "transactionId": 5,
    "customerId": 1,
    "amount": 130,
    "date": "2-10-2023"
  },
];

export default async function mockFetch(url) {
  switch (url) {
    case "http://localhost:3000/customers":
      return {
        ok: true,
        status: 200,
        json: async () => customerData,
      };
    case "http://localhost:3000/transactions":
      return {
        ok: true,
        status: 200,
        json: async () => transactions,
      };
    case `http://localhost:3000/transactions/?customerId=1`:
      return {
        ok: true,
        status: 200,
        json: async () => customerDataById,
      };
    default: {
      throw new Error(`Error: ${url}`);
    }
  }
}
