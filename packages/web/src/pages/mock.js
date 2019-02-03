import React from "react"
import axios from "axios"
// UIs
import { TextField, Button } from "ui"
import Layout from "components/Layout"
import Nav from "components/Nav"
import remoteReminders from "../../../server/src/modules/transaction/reminders"

function MockPage() {
  function calculate(merchant, category) {
    const localReminders = JSON.parse(localStorage.getItem("reminders")) || []
    const reminders = [...remoteReminders, ...localReminders]
    const transactions = JSON.parse(localStorage.getItem("transactions")) || []

    const overs = reminders.reduce((over, reminder) => {
      if (reminder.name === merchant || reminder.name === category) {
        const usage = transactions.reduce((u, transaction) => {
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

        if (usage / parseFloat(reminder.amount) > 0.8) {
          over.push({ ...reminder, usage })
        }
      }

      return over
    }, [])
    console.log(overs)
    if (overs.length > 0) {
      axios.post(`${process.env.GATSBY_API_URL}/trigger`, {
        reminders: overs,
        phone: localStorage.getItem("phone"),
        name: localStorage.getItem("name"),
      })
    }
  }

  return (
    <Layout>
      <Nav />

      <div style={{ maxWidth: 298 }}>
        <label>
          Merchant:
          <br />
          <TextField id="merchant" />
        </label>

        <br />

        <label>
          Date:
          <br />
          <TextField id="date" value="2019-02-03" disabled />
        </label>

        <label>
          Amount:
          <br />
          <TextField id="amount" />
        </label>

        <br />

        <label>
          Type: <br />
          {/* <Select
            id="category"
            options={[
              { value: "CLOTHING", label: "CLOTHING" },
              {
                value: "EATING PLACES, RESTAURANTS",
                label: "EATING PLACES, RESTAURANTS",
              },
            ]}
          /> */}
          <TextField id="category" />
        </label>
      </div>

      <br />

      <Button
        type="button"
        onClick={() => {
          const merchantInput = document.getElementById("merchant")
          const dateInput = document.getElementById("date")
          const amountInput = document.getElementById("amount")
          const categoryInput = document.getElementById("category")

          const transaction = {
            merchant: {
              name: merchantInput.value,
              categoryDescription: categoryInput.value,
            },
            amount: {
              currency: "USD",
              value: amountInput.value,
            },
            date: dateInput.value,
          }

          const transactions =
            JSON.parse(localStorage.getItem("transactions")) || []
          transactions.unshift(transaction)
          localStorage.setItem("transactions", JSON.stringify(transactions))

          calculate(merchantInput.value, categoryInput.value)
        }}
      >
        Mock
      </Button>
    </Layout>
  )
}

export default MockPage
