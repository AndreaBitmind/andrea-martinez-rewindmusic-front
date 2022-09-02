import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  justify-content: space-between;

  .submit-big {
    padding: 1.5rem;
    width: 350px;
    height: 40px;
    font-size: 1rem;
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

export default ButtonStyled;
