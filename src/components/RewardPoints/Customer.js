import React from "react";
import { useEffect, useState } from "react";
import { getPoints, getMonth, getCustomers, getTransactionId } from "../../utils/RetailRewards";
import FilterByMonth from "./FilterByMonth";

export default function Customer() {
  const [customersData, setCustomersData] = useState([]);
  const [customerPoints, setCustomerPoints] = useState([]);
  const [month, setMonth] = useState("");

  useEffect(() => {
    async function fetchCustomerData() {
      try {
        const response = await getCustomers();
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(`Could not get customer data: ${err}`);
      }
    }
    fetchCustomerData().then((data) => setCustomersData(data));
  }, []);

  function getCustomerByMonth(customersData) {
    const totalPoints = Promise.all(
      customersData.map(async (customer) => {
        return await getTransactionId(customer.customerId)
          .then((response) => response.json())
          .then((data) => {
            const totalPoints = data.reduce((acc, curr) => {
              acc = acc + getPoints(curr.amount);
              return acc;
            }, 0);
            const pointsByMonth = data.reduce((acc, curr) => {
              let month = getMonth(curr["date"].split("-")[0]);
              if (acc[month]) {
                //add curr to monthly total
                acc[month] = acc[month] + getPoints(curr.amount);
              } else {
                acc[month] = getPoints(curr.amount);
              }
              return acc;
            }, {});
            return {
              customerId: customer.customerId,
              name: customer.name,
              totalPoints: totalPoints,
              pointsByMonth: pointsByMonth,
            };
          })
          .catch((err) => console.log("customersData error: ", err));
      })
    );
    totalPoints.then((data) => setCustomerPoints(data));
  }

  function handleSubmit(e, text) {
    e.preventDefault();
    if (text) {
      setMonth(text[0].toUpperCase() + text.slice(1));
    }
  }
  useEffect(() => {
    getCustomerByMonth(customersData);
  }, [customersData]);

  return (
    <>
      <h4>Customer Points By Month</h4>
      <FilterByMonth
        handleSubmit={handleSubmit}
        labelText="Get points for January, February, March"
        placeHolderText="Enter Month"
      />
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Monthly Points</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {customerPoints.length > 0 && (
            customerPoints.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.name}</td>
                <td>{customer.pointsByMonth[month] || 0}</td>
                <td>{customer.totalPoints}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
