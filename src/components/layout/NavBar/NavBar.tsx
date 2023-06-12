import { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5em;
    background-color: #222;
    position: fixed;
    z-index: 10;
  `;
  const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    list-style: none;

    @media (max-width: 1000px) {
      display: none;
    }
  `;
  const Li = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2em;
    font-size: 22px;
    color: #607d8b;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #399fbf;
      border-bottom: 4px solid #399fbf;
    }
  `;
  const BurgerUL = styled.ul`
    list-style: none;
    position: absolute;
    right: -3em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #c6c2c7;
    border: 1px solid #222;
    padding: 1em 1em 0 1em;
  `;
  const BurgerLI = styled.li`
    height: 2em;
    font-size: 22px;
    border-bottom: 1px solid #b1a9a9;
    text-align: center;
    width: 100%;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: #399fbf;
    }
  `;

  const Burger = styled.div`
    border: 1px solid red;
    display: flex;
    display: none;
    position: relative;
    left: 40%;

    justify-content: flex-end;
    svg {
      font-size: 52px;
      color: #ffff;
    }

    @media (max-width: 1000px) {
      display: block;
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
        <Li onClick={scrollUser}> Sobre mim</Li>
        <Li onClick={scrollUser}>Tecnologias</Li>
        <Li onClick={scrollUser}>Projetos</Li>
      </Ul>
    </Nav>
  );
}
