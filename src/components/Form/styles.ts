import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  width: 456px;
  margin: 50px auto;
  flex-direction: column;
  position: absolute;
  @media (max-width: 744px) {
    width: 331px;
    margin: 35px auto;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 0 15px 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  margin: 0 auto 45px;
  max-width: 414px;
  @media (max-width: 744px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    width: 290px;
  }
`;

const Subtitle = styled.h2`
  max-width: 414px;
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  color: rgba(117, 108, 108, 0.57);
  margin: 0 auto 45px;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;

const TotalTips = styled.span`
  margin: 45px 0 0 0;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 480px) {
    margin: 25px auto 0;
    font-size: 18px;
    width: 290px;
  }
`;

export { StyledForm, TotalTips, Title, Subtitle };
