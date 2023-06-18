import styled from "styled-components";

type NavBarProps = {
  textColor: string;
  bgColor: string;
  setTheme: React.Dispatch<React.SetStateAction<string>> | undefined;
  setScrollTo: React.Dispatch<React.SetStateAction<string>>;
};

const Nav = styled.nav<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
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
export default function NavBar({
  bgColor,
  textColor,
  setTheme,
  setScrollTo,
}: NavBarProps) {
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
