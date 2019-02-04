import React from "react"
import PropTypes from "prop-types"

function Reminder({ reminder, transactions }) {
  const usage = transactions
    ? transactions.reduce((u, transaction) => {
        if (reminder.type === "category") {
          if (transaction.merchant.categoryDescription === reminder.name) {
            u += parseFloat(transaction.amount.value)
          }
        } else {
          if (transaction.merchant.name === reminder.name) {
            u += parseFloat(transaction.amount.value)
          }
        }
        return u
      }, 0)
    : 0

  return (
    <tr>
      <td>{reminder.type}</td>
      <td>{reminder.name}</td>
      <td>
        ${reminder.amount}/{reminder.time}
      </td>
      <td>${usage.toFixed(2)}</td>
    </tr>
  )
}

Reminder.propTypes = {
  reminder: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.string,
  }).isRequired,
  transactions: PropTypes.any,
}

export default Reminder
