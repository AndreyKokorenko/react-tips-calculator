import styled from "styled-components";
import shape from "./assets/shape.png";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  background: left top no-repeat url(${shape}), #eaf2f2;
`;

export { Container };
