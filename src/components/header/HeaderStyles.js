import styled from "styled-components";

const HeaderStyles = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ offset }) => (offset >= 250 ? "#fff" : "transperent")};
  box-shadow: ${({ offset }) =>
    offset >= 250 ? "-1px 3px 15px 0px rgba(34, 60, 80, 0.2)" : "none"};

  .logo-container {
    width: 248px;
    height: 31px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 54px;
  }

  .logo {
    width: 99px;
    height: 25px;

    fill: #404040;
  }

  .navigation-box {
    width: 73%;
    /* margin-top: 25px; */
    margin-right: 45px;
    position: absolute;
    right: 0;
    /* top: 0; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1293px) {
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
