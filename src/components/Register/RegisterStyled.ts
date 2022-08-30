import styled from "styled-components";

export const RegisterStyle = styled.div`
  padding: 0;
  margin: 0 auto;
  display: flex;
  list-style: none;
  gap: 1rem;
  width: fit-content;
  padding: 3rem;
  padding-left: 20px;
  padding-right: 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Overpass, Verdana, Geneva, Tahoma, sans-serif;
  }

  input {
    border-radius: 7px;
    background-color: ${(props) => props.theme.backgroundInputColor};
    margin-bottom: 10px;
    padding: 8px;
    border-color: ${(props) => props.theme.backgroundInputColor};
    width: 360px;
    height: 40px;
    font-size: 1.3rem;
  }
`;
