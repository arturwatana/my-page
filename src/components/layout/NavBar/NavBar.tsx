import styled from "styled-components";

export default function NavBar() {
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 5em;
    background-color: #464855;
    position: fixed;
    z-index: 10;
  `;
  const Ul = styled.ul`
    display: flex;
    align-items: end;
    list-style: none;
    margin: 0 5em 1em 0;
  `;
  const Li = styled.li`
    margin-right: 2em;
    font-size: 22px;
    color: #fff4f4;
  `;

  return (
    <Nav>
      <Ul>
        <Li>Sobre mim</Li>
        <Li>Tecnologias</Li>
        <Li>Projetos</Li>
      </Ul>
    </Nav>
  );
}
