import styled from "styled-components"

const Button = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);

  display: inline-block;
  text-align: center;

  background-color: ${props =>
    props.variant === "default" ? "#857F72" : "#0A6C74"};
  color: ${props => (props.variant === "default" ? "#FAF9F7" : "#FAF9F7")};

  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.variant === "default" ? "#A39E93" : "#2CB1BC"};
  }

  &:active {
    transform: translateY(2px);
  }
`

Button.defaultProps = {
  variant: "primary",
}

export default Button
