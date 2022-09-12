import styled from "styled-components";

export const SongDetailsStyled = styled.div`
  min-width: 390px;

  ul {
    list-style: none;
    padding: 20px 0 0 0;
  }

  img {
    align-self: center;
    border-radius: 10px;
    margin-top: 10px;
  }

  .song-detail__title {
    background-color: ${(props) => props.theme.backgroundCard};
    padding: 10px 0;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    margin: 12px 0;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .song-detail__details {
    background-color: ${(props) => props.theme.backgroundCard};
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .song-detail {
    font-size: 1.3rem;
    padding: 5px;
    font-weight: bold;
  }

  .navigation-bar {
    display: flex;
    justify-content: flex-end;
  }

  .navlink-more {
    background-color: ${(props) => props.theme.adminButton};
    padding: 1.2rem;
    border-radius: 7px;
    color: black;
    width: 100px;
    height: 30px;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-decoration: none;
  }

  .modify-song {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  .navlink {
    text-decoration: none;
    padding: 1.2rem;
    width: 200px;
    height: 50px;
    font-size: 1.2rem;
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
