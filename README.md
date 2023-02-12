# Reward Points

A retailer offers a rewards program to its customers, which is based on points earned for every purchase.

A customer would receive,
  - Two points for every dollar spent over $100 in each transaction
  - One point for every dollar spent over $50 in each transaction 

For example: In $120 purchase, points earned would be calculated as:
 2 x $20 + 1 x $50 = 90 points

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

# Components
Transaction component - Get all the transaction and display in a table

Customer component  - Get the cutomer and transaction data, calculates the points earned per customer. Display in a table
Based on user input, the table will display customer points per month [ January, February, March]
 
# Install and Run

    Clone the repo
    Run npm install
    Run npx json-server --watch ./src/data/customer.json 
    Run npm start 

# Unit tests
    Run npm run test to run test cases.