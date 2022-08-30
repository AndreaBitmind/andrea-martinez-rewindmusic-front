import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 1.5rem;
  width: 379px;
  height: 40px;
  font-size: 1.5rem;
  border-radius: 7px;
  background-color: ${(props) => props.theme.mainButton};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-color: ${(props) => props.theme.mainButton};
  margin-top: 20px;
  font-family: inherit;
`;
