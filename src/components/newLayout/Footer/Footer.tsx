import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const FooterContainer = styled.footer`
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

  a {
    text-decoration: none;
    color: #222;

    :hover:first-child {
      color: #0e76a8;
    }
    :hover:last-child {
      color: #fff;
    }
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <Icons>
        <a
          href="https://www.linkedin.com/in/artur-watanabe-225020163/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/arturwatana" target="_blank">
          <BsGithub />
        </a>
      </Icons>
    </FooterContainer>
  );
}
