import styled from "styled-components";

const StyledButton = styled.button`
  background: #2ed2c9;
  border: 0;
  color: #ffffff;
  width: 100%;
  height: 61px;
  margin: 45px auto;
  font-weight: 400;
  font-size: 24px;
  &:disabled {
    opacity: 0.5;
  }
  @media (max-width: 744px) {
    width: 100%;
    margin: 35px auto;
  }
  @media (max-width: 480px) {
    width: 290px;
  }
`;

export { StyledButton };
