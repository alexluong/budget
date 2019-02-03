import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Money from "components/Money"

const Table = styled.table`
  th,
  td {
    padding: 0.5rem 1rem;
    padding-right: 8rem;
  }

  th {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

function Transactions({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Date</th>
          <th>Merchant</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.transactionId}>
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
