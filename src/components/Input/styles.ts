import styled from "styled-components";

const StyledInput = styled.input`
  text-align: center;
  width: 100%;
  height: 68px;
  margin: 0 auto 33px;
  padding: 0;
  border: 0;
  border-radius: 30px;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 480px) {
    width: 290px;
  }
`;

export { StyledInput };
