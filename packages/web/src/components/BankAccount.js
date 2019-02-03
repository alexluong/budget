import React from "react"
import PropTypes from "prop-types"

function BankAccount({ account }) {
  return (
    <div>
      <p>Account number: {account.accountNumber}</p>
      <p>Routing number: {account.routingNumber}</p>
    </div>
  )
}

BankAccount.propTypes = {
  account: PropTypes.shape({
    accountNumber: PropTypes.string.isRequired,
    routingNumber: PropTypes.string.isRequired,
    checkingAccountId: PropTypes.string,
    savingsAccountId: PropTypes.string,
  }).isRequired,
}

export default BankAccount
