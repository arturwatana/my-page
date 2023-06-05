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
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      color: #399fbf;
    }
  `;

  function scrollUser(e: any) {
    switch (e.target.innerText) {
      case "Sobre mim":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "Tecnologias":
        window.scrollTo({
          top: 500,
          behavior: "smooth",
        });
        break;
      case "Projetos":
        window.scrollTo({
          top: 1100,
          behavior: "smooth",
        });
        break;
    }
  }

  return (
    <Nav>
      <Ul>
        <Li onClick={scrollUser}>Sobre mim</Li>
        <Li onClick={scrollUser}> Tecnologias</Li>
        <Li onClick={scrollUser}>Projetos</Li>
      </Ul>
    </Nav>
  );
}
