import styled from "styled-components";

export const SongCardStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundCard};
  border-radius: 10px;
  display: flex;
  padding: 5px;

  ul {
    list-style: none;
    padding-left: 0;
    padding-bottom: 20px;
  }

  img {
    border-radius: 10px;
    padding-right: 10px;
  }

  span {
    background-color: ${(props) => props.theme.tagAndPagination};
    color: white;
    padding: 4px 8px;
    border-radius: 20px;
  }

  .songcard__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 5px;
  }

  .navlink-edit {
    background-color: ${(props) => props.theme.adminButton};
    padding: 4px 8px;
    border-radius: 20px;
    color: black;
    width: 70px;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 1.5rem;
    text-decoration: none;
  }
  .data--big {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .icon--trash {
    font-size: 2.5rem;
  }

  .songCard__functionality {
    display: grid;
    justify-items: end;
    align-content: space-between;
    padding-left: 4px;
  }
`;