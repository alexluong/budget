import React from "react"
import styled from "styled-components"
import useAxios from "hooks/useAxios"
import card from "card"
// UIs
import Layout from "components/Layout"
import Nav from "components/Nav"
import BankAccount from "components/BankAccount"

const Section = styled.section`
  margin: 2rem 0;
  padding-bottom: 10rem;

  h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #ccc;
  }

  li {
    margin-left: 2rem;
  }
`

function DetailsPage() {
  const { response, loading, error } = useAxios({
    url: `${process.env.GATSBY_API_URL}/details/${card}`,
    method: "GET",
  })

  function render() {
    if (loading) {
      return <p>Loading</p>
    }

    if (error) {
      console.log(error)
      return <p>Error</p>
    }

    const customer = response.data

    return (
      <div>
        <Section>
          <h2>Personal Information</h2>
          <p>Name: {`${customer.name.first} ${customer.name.last}`}</p>
          <ul>
            Phone numbers:
            {customer.phones.map(phone => (
              <li key={phone.value}>
                {phone.type}, {phone.value}
              </li>
            ))}
          </ul>
          <ul>
            Addresses:
            {customer.addresses.map(({ address }) => (
              <li key={address.addressId}>
                {address.line1} {address.city}, {address.stateProvince},{" "}
                {address.postalCode}, {address.countryCode}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2>Work Information</h2>
          <p>Company Name: {customer.employer.companyName}</p>
          <p>
            Address:{" "}
            <span>
              {customer.employer.companyAddress.line1}{" "}
              {customer.employer.companyAddress.city},{" "}
              {customer.employer.companyAddress.stateProvince},{" "}
              {customer.employer.companyAddress.postalCode}
            </span>
          </p>
          <p>Phone Number: {customer.employer.businessPhoneNumber}</p>
        </Section>

        <Section>
          <h2>Bank Information</h2>

          <ul>
            Checking accounts:
            {customer.bankInformation.checking.map(account => (
              <li key={account.checkingAccountId}>
                <BankAccount account={account} />
              </li>
            ))}
          </ul>

          <ul>
            Saving accounts:
            {customer.bankInformation.savings.map(account => (
              <li key={account.savingsAccountId}>
                <BankAccount account={account} />
              </li>
            ))}
          </ul>
        </Section>
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

export default DetailsPage
