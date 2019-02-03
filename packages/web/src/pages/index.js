import React from "react"
import useAxios from "hooks/useAxios"
import card from "card"
// UIs
import Layout from "components/Layout"
import Nav from "components/Nav"
import Transactions from "components/Transactions"
import Money from "components/Money"

function IndexPage() {
  const { response, loading, error } = useAxios({
    url: `${process.env.GATSBY_API_URL}/transactions/${card}`,
    method: "GET",
  })

  // console.log({ response, loading, error })

  function render() {
    if (loading) {
      return <p>Loading</p>
    }

    if (error) {
      console.log(error)
      return <p>Error</p>
    }

    const { transaction, account } = response.data

    return (
      <div>
        <div>
          <p>Type: {account.type}</p>
          <p>
            Balance: <Money money={account.currentBalance} />
          </p>
        </div>

        <hr style={{ margin: "2rem 0" }} />

        <Transactions transactions={transaction.transactions} />
      </div>
    )
  }

  return (
    <Layout>
      <Nav />
      {render()}
    </Layout>
  )
}

export default IndexPage
