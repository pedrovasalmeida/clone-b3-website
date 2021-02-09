import styled from 'styled-components';
import { IoMdWarning } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  height: calc(100vh - 74px);

  padding: 50px;

  background-color: #eeeeee;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 30px 0;
    color: #7098ba;
  }

  span {
    color: #7a7c82;
    margin: 15px 0;

    strong {
      font-weight: 600;
    }
  }
`;

export const WarningIcon = styled(IoMdWarning)`
  color: #6fa5c5;
`;

export const Button = styled.button`
  background: #23b1dc;
  padding: 15px 20px;
  margin: 20px 0;

  transition: background 500ms ease;

  span {
    color: #fff;
    text-transform: uppercase;
  }

  &:hover {
    background: #005ca9;
  }
`;
