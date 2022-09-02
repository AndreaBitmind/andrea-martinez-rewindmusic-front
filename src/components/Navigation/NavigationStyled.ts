import styled from "styled-components";

export const NavigationStyled = styled.nav`
  div {
    display: flex;
    justify-content: space-between;
    width: 350px;
  }
  .navlink {
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
