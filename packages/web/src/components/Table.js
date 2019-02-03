import styled from "styled-components"

const Table = styled.table`
  width: 100%;
  th,
  td {
    padding: 0.5rem 1rem;
    text-align: center;
  }

  th {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ${props =>
    props.left &&
    `
  td {
    &:first-child {
      text-align: left;
    }
  }
  `}
`

export default Table
