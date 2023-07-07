import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

import { useContext, useState } from "react";
import { ContentContext } from "../../../App";

type NavBarProps = {
  textColor: string;
  bgColor: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setScrollTo: React.Dispatch<React.SetStateAction<string>>;
};

const Nav = styled.nav<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;

  @media (max-width: 1010px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2em;
  align-items: center;
  font-size: 25px;
`;

const Li = styled.li<{ $textColor: string }>`
  p {
    color: ${(props) => props.$textColor};
    text-decoration: none;
    transition: 0.5s;
    font-family: Arial, Arial, Helvetica, sans-serif;

    cursor: pointer;
    :hover {
      color: #399fbf;
    }
  }
`;

const ToggleLightMode = styled.div<{ $textColor: string; $bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    border-radius: 2em;
    width: 7em;
    height: 3em;
    color: ${(props) => props.$bgColor};
    background-color: ${(props) => props.$textColor};
    transition: 0.5s;
    font-family: Arial, Arial, Helvetica, sans-serif;
  }
`;

const NavContainer = styled.div`
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;

  div {
    &.centered {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Burger = styled.div<{ $textColor: string; $bgColor: string }>`
  color: ${(props) => props.$textColor};
  height: 100%;
  position: relative;
  display: none;

  @media (max-width: 1010px) {
    display: block;
  }

  svg {
    font-size: 40px;
  }

  ul {
    border-radius: 1em;
    border: 1px solid ${(props) => props.$textColor};
    background-color: ${(props) => props.$bgColor};
    position: absolute;
    color: ${(props) => props.$textColor};
    list-style: none;
    display: flex;
    flex-direction: column;
    top: 0;
    left: -2em;
    gap: 2em;
    margin-top: 2em;
    padding: 1em;
    font-size: 20px;
  }
`;

export default function NavBar({
  bgColor,
  textColor,
  setScrollTo,
}: NavBarProps) {
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);
  const { setTheme } = useContext(ContentContext);
  return (
    <NavContainer>
      <div className="centered">
        <ToggleLightMode $bgColor={bgColor} $textColor={textColor}>
          <button
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
            }}
          >
            {textColor === "#f5d2d2" ? "Dark Mode" : "Light Mode"}
          </button>
        </ToggleLightMode>
        <Burger $textColor={textColor} $bgColor={bgColor}>
          <RxHamburgerMenu onClick={() => setBurgerIsOpen((prev) => !prev)} />
          {burgerIsOpen ? (
            <ul>
              <Li $textColor={textColor}>
                <p onClick={() => setScrollTo(".section-1")}>Home</p>
              </Li>
              <Li $textColor={textColor}>
                <p onClick={() => setScrollTo(".section-2")}> About</p>
              </Li>
              <Li $textColor={textColor}>
                <p onClick={() => setScrollTo(".section-3")}>Projects</p>
              </Li>
            </ul>
          ) : (
            ""
          )}
        </Burger>
        <Nav $textColor={textColor}>
          <Ul>
            <Li $textColor={textColor}>
              <p onClick={() => setScrollTo(".section-1")}>Home</p>
            </Li>
            <Li $textColor={textColor}>
              <p onClick={() => setScrollTo(".section-2")}> About</p>
            </Li>
            <Li $textColor={textColor}>
              <p onClick={() => setScrollTo(".section-3")}>Projects</p>
            </Li>
          </Ul>
        </Nav>
      </div>
    </NavContainer>
  );
}
