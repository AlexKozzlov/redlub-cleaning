import styled from "styled-components";

const HeaderStyles = styled.div`
  margin: 10px;
  width: 100%;
  /* height: 10px; */
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .navigation-box {
    width: 73%;
    margin-top: 25px;
    margin-right: 45px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1085px) {
      /* width: 26%; */
      width: 250px;
    }
  }
  & .contact-information {
    width: 250px;
    height: 18px;
    color: #404040;

    font-family: "TT Travels";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.20000000298023224px;
  }
`;

export { HeaderStyles };
