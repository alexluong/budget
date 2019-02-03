import React from "react"
import PropTypes from "prop-types"
import Money from "components/Money"
import Table from "components/Table"

function Transactions({ transactions: remoteTransactions }) {
  const localTransactions =
    JSON.parse(localStorage.getItem("transactions")) || []
  const transactions = [...localTransactions, ...remoteTransactions]

  return (
    <Table left>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Date</th>
          <th>Merchant</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, i) => (
          <tr key={transaction.transactionId || i}>
            <td>
              <Money money={transaction.amount} />
            </td>
            <td>{transaction.date}</td>
            <td>{transaction.merchant?.name || null}</td>
            <td>{transaction.merchant?.categoryDescription || null}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.shape({
        currency: PropTypes.string,
        value: PropTypes.string,
      }),
      code: PropTypes.string,
      date: PropTypes.string,
      merchant: PropTypes.shape({
        address: PropTypes.object,
        categoryCode: PropTypes.string,
        categoryDescription: PropTypes.string,
        name: PropTypes.string,
      }),
      meta: PropTypes.any,
      postingDates: PropTypes.string,
      referenceNumber: PropTypes.string,
      statementBeginDate: PropTypes.string,
      transactionId: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
}

export default Transactions
