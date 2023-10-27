// Button.js
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  /* Other styles */
`;

export default Button;
