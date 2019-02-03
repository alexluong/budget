import React from "react"
import useAxios from "hooks/useAxios"
// UIs
import Layout from "components/Layout"
import Nav from "components/Nav"
import Table from "components/Table"
import AddReminder from "components/AddReminder"
import Title from "components/Title"
import { Button } from "ui"

function RemindersPage() {
  const { response, loading, error } = useAxios({
    url: `${process.env.GATSBY_API_URL}/reminders`,
    method: "GET",
  })

  const [, setStuff] = React.useState(false)

  let reminders

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
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, i) => (
              <tr key={i}>
                <td>{reminder.type}</td>
                <td>{reminder.name}</td>
                <td>
                  ${reminder.amount}/{reminder.time}
                </td>
              </tr>
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
