import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  const Footer = styled.footer`
    width: 100%;
    background-color: #464855;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Icons = styled.i`
    font-size: 32px;
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 0.2em;

    & a {
      text-decoration: none;
      color: #222;
    }
  `;

  return (
    <Footer>
      <Icons>
        <a href="https://github.com/arturwatana">
          <BsLinkedin />
        </a>
        <a href="github.com/arturwatana">
          <BsGithub />
        </a>
      </Icons>
    </Footer>
  );
}
