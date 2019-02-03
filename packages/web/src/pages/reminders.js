import React from "react"
import useAxios from "hooks/useAxios"
// UIs
import Layout from "components/Layout"
import Nav from "components/Nav"
import Table from "components/Table"
import Reminder from "components/Reminder"
import AddReminder from "components/AddReminder"
import Title from "components/Title"

function RemindersPage() {
  const { response, loading, error } = useAxios({
    url: `${process.env.GATSBY_API_URL}/reminders`,
    method: "GET",
  })

  const [, setStuff] = React.useState(false)

  let reminders
  const transactions = JSON.parse(localStorage.getItem("transactions"))

  function render() {
    if (loading) {
      return <p>Loading</p>
    }

    if (error) {
      console.log(error)
      return <p>Error</p>
    }

    const localReminders = JSON.parse(localStorage.getItem("reminders")) || []
    reminders = [...localReminders, ...response.data.reminders]

    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, i) => (
              <Reminder
                key={i}
                reminder={reminder}
                transactions={transactions}
              />
            ))}
          </tbody>
        </Table>

        <hr
          style={{
            margin: "2rem 0",
            borderColor: "#ddd",
            backgroundColor: "#ddd",
            color: "#ddd",
          }}
        />

        <AddReminder onClick={() => setStuff("1")} />
      </React.Fragment>
    )
  }

  return (
    <Layout>
      <Nav />

      <Title>Reminders</Title>
      {render()}
    </Layout>
  )
}

export default RemindersPage
