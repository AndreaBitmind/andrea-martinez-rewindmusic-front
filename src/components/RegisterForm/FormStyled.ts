import styled from "styled-components";

export const FormStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 390px;
  margin: 0 20px;

  h2 {
    margin-bottom: 30px;
    font-size: 1.8rem;
    text-align: center;
    padding-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    border-radius: 7px;
    background-color: ${(props) => props.theme.backgroundInputColor};
    margin-bottom: 13px;
    padding: 8px;
    border-color: ${(props) => props.theme.backgroundInputColor};
    width: 390px;
    height: 60px;
    font-size: 1.2rem;
    font-family: inherit;
  }

  .register-link {
    color: black;
    font-weight: bold;
    font-family: inherit;
  }

  .instrument-selection {
    border-radius: 7px;
    background-color: ${(props) => props.theme.backgroundInputColor};
    margin-bottom: 13px;
    padding: 8px;
    border-color: ${(props) => props.theme.backgroundInputColor};
    width: 390px;
    height: 40px;
    font-size: 1rem;
    font-family: inherit;
  }

  .main-buttons {
    display: flex;
    width: 390px;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
    justify-content: flex-end;
  }

  .navlink-back {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.2rem;
    width: 100px;
    height: 30px;
    font-size: 1rem;
    color: black;
    border-radius: 7px;
    background-color: ${(props) => props.theme.adminButton};
    font-weight: bold;
    border-color: ${(props) => props.theme.adminButton};
    font-family: inherit;
  }
`;
