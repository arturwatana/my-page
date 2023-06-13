import styled from "styled-components";

type NavBarProps = {
  textColor: string;
  bgColor: string;
  setTheme: React.Dispatch<React.SetStateAction<string>> | undefined;
};

export default function NavBar({ bgColor, textColor, setTheme }: NavBarProps) {
  const Nav = styled.nav`
    color: ${textColor};
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

  const Li = styled.li`
    a {
      color: ${textColor};
      text-decoration: none;
      transition: 0.5s;
      :hover {
        color: #399fbf;
      }
    }
  `;

  const ToggleLightMode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: none;
      border-radius: 2em;
      width: 7em;
      height: 3em;
      color: ${bgColor};
      background-color: ${textColor};
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

  return (
    <NavContainer>
      <div className="centered">
        <ToggleLightMode>
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
        <Nav>
          <Ul>
            <Li>
              <a href="">Home</a>
            </Li>
            <Li>
              <a href="">About</a>
            </Li>
            <Li>
              <a href="">Projects</a>
            </Li>
          </Ul>
        </Nav>
      </div>
    </NavContainer>
  );
}
