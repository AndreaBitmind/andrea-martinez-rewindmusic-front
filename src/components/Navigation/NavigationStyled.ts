import styled from "styled-components";

export const NavigationStyled = styled.nav`
  margin: 0;

  div {
    display: flex;
    justify-content: space-between;
    width: 390px;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
  }
  .navlink {
    text-decoration: none;
    padding: 1.2rem;
    width: 100px;
    height: 30px;
    font-size: 1rem;
    color: black;
    border-radius: 7px;
    background-color: ${(props) => props.theme.mainButton};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-color: ${(props) => props.theme.mainButton};
    font-family: inherit;
  }

  .navlink-upload {
    text-decoration: none;
    padding: 1.2rem;
    width: 150px;
    height: 30px;
    font-size: 1rem;
    color: black;
    border-radius: 7px;
    background-color: ${(props) => props.theme.adminButton};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-color: ${(props) => props.theme.adminButton};
    font-family: inherit;
  }
`;
