import React from "react"
import styled from "styled-components"
import { Button, TextField, Select } from "ui"

const Container = styled.div`
  max-width: 298px;
  ${TextField} {
    width: 100%;
  }
`

function AddReminder({ onClick }) {
  const [adding, setAdding] = React.useState(false)
  const toggleAdding = () => setAdding(!adding)

  return (
    <Container>
      {adding && (
        <div style={{ marginBottom: "2rem" }}>
          <div>
            <label>
              Type: <br />
              <Select
                id="type"
                options={[
                  { value: "merchant", label: "merchant" },
                  { value: "category", label: "category" },
                ]}
              />
            </label>
          </div>

          <div>
            <label>
              Name: <br />
              <TextField id="name" />
            </label>
          </div>

          <div>
            <label>
              Amount: <br />
              <TextField id="amount" />
            </label>
          </div>

          <div>
            <label>
              Timeline: <br />
              <Select
                id="time"
                options={[
                  { value: "week", label: "week" },
                  { value: "month", label: "month" },
                  { value: "year", label: "year" },
                ]}
              />
            </label>
          </div>
        </div>
      )}
      <Button variant="default" onClick={toggleAdding}>
        {adding ? "Cancel" : "Add"}
      </Button>
      {adding && (
        <Button
          style={{ marginLeft: "1.5rem" }}
          onClick={() => {
            const typeInput = document.getElementById("type")
            const nameInput = document.getElementById("name")
            const amountInput = document.getElementById("amount")
            const timeInput = document.getElementById("time")

            const reminders =
              JSON.parse(localStorage.getItem("reminders")) || []
            reminders.unshift({
              type: typeInput.value,
              name: nameInput.value,
              amount: amountInput.value,
              time: timeInput.value,
            })
            localStorage.setItem("reminders", JSON.stringify(reminders))
            onClick()
            typeInput.value = ""
            nameInput.value = ""
            amountInput.value = ""
            timeInput.value = ""
            toggleAdding()
          }}
        >
          Add
        </Button>
      )}
    </Container>
  )
}

export default AddReminder
