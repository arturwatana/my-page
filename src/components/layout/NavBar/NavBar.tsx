import { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 3em;
    background-color: #c6c2c7;
    position: fixed;
    z-index: 10;
  `;
  const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 5em 1em 0;
  `;
  const Li = styled.li`
    margin-right: 2em;
    font-size: 22px;
    color: #fff4f4;
    transition: 0.5s;
    cursor: pointer;
    color: #0c0d0c;

    &:hover {
      color: #399fbf;
    }
  `;
  const BurgerUL = styled.ul`
    list-style: none;
    position: absolute;
    top: 100%;
    left: 77%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #c6c2c7;
  `;
  const BurgerLI = styled.li`
    height: 2em;
    font-size: 22px;
    border-bottom: 1px solid #222;
    text-align: center;
    width: 100%;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: #399fbf;
    }
  `;

  const Burger = styled.div`
    display: none;
    svg {
      font-size: 42px;
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
      <Burger>
        <RxHamburgerMenu
          onClick={() => {
            setBurgerIsOpen(!burgerIsOpen);
          }}
        />
        {burgerIsOpen ? (
          <>
            <BurgerUL>
              <BurgerLI>Sobre Mim</BurgerLI>
              <BurgerLI>Tecnologias</BurgerLI>
              <BurgerLI>Projetos</BurgerLI>
            </BurgerUL>
          </>
        ) : null}
      </Burger>

      <Ul>
        <Li onClick={scrollUser}>Sobre mim</Li>
        <Li onClick={scrollUser}> Tecnologias</Li>
        <Li onClick={scrollUser}>Projetos</Li>
      </Ul>
    </Nav>
  );
}
