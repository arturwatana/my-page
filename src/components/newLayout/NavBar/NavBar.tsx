import { Link } from "react-router-dom";
import styled from "styled-components";

type NavBarProps = {
  textColor: string;
  bgColor: string;
  setTheme: React.Dispatch<React.SetStateAction<string>> | undefined;
};

const Nav = styled.nav<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2em;
  align-items: center;
  font-size: 25px;
`;

const Li = styled.li<{ $textColor: string }>`
  a {
    color: ${(props) => props.$textColor};
    text-decoration: none;
    transition: 0.5s;
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
      display: flex;
      width: 70%;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
export default function NavBar({ bgColor, textColor, setTheme }: NavBarProps) {
  return (
    <NavContainer>
      <div className="centered">
        <ToggleLightMode $bgColor={bgColor} $textColor={textColor}>
          <button
            onClick={() => {
              setTheme
                ? setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                : null;
            }}
          >
            {textColor === "#222" ? "Dark Mode" : "Light Mode"}
          </button>
        </ToggleLightMode>
        <Nav $textColor={textColor}>
          <Ul>
            <Li $textColor={textColor}>
              <Link to="/">Home</Link>
            </Li>
            <Li $textColor={textColor}>
              <a href="">About</a>
            </Li>
            <Li $textColor={textColor}>
              <a href="">Projects</a>
            </Li>
          </Ul>
        </Nav>
      </div>
    </NavContainer>
  );
}
