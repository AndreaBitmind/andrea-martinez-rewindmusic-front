import styled from "styled-components";

export const PageNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
  }

  img {
    width: 410px;
    display: flex;
    justify-content: center;
  }

  p {
    padding-top: 30px;
    display: flex;
    font-weight: bold;
    font-size: 2.8rem;
    justify-content: center;
    text-align: center;
  }

  .navlink-home {
    padding: 1.2rem;
    width: 100px;
    height: 30px;
    font-size: 1rem;
    color: black;
    margin-top: 20px;
    border-radius: 7px;
    background-color: ${(props) => props.theme.mainButton};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-color: ${(props) => props.theme.mainButton};
    font-family: inherit;
  }
`;
