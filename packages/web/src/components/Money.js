import PropTypes from "prop-types"

function Money({ money }) {
  if (money.currency === "USD") {
    return `$${money.value}`
  } else {
    return `${money.currency} ${money.value}`
  }
}

Money.propTypes = {
  money: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default Money
