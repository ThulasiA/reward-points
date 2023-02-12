import React from "react";
import { useEffect, useState } from "react";
import { getPoints, getTransactions } from "../../utils/RetailRewards";

export default function Transactions() {
  const [transactionData, setTransactionData] = useState([]);
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await getTransactions();
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(`No transactions available: ${err}`);
      }
    }
    fetchTransactions().then((data) => setTransactionData(data));
  }, []);

  return (
    <>
      <h4>All Transactions</h4>
      <table>
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>Date</th>
            <th>Customer Id</th>
            <th>Amount</th>
            <th>Earned Points</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.length > 0 && (
            transactionData.map((transaction) => (
              <tr key={transaction.transactionId}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.date}</td>
                <td>{transaction.customerId}</td>
                <td>{transaction.amount}</td>
                <td>{getPoints(transaction.amount)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}