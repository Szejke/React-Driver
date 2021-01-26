import styled from 'styled-components';
import ButtonBootstrap from 'react-bootstrap/Button';

const Button = styled(ButtonBootstrap)`
  background-color: ${({ theme }) => theme.colorPrimary};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;

export default Button;
