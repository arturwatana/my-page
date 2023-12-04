import styled from "styled-components";
import { RxArrowTopLeft } from "react-icons/rx";

const ScrollToTopContainer = styled.div<{ $theme: string }>`
  width: 4em;
  height: 4em;
  position: fixed;
  top: 85%;
  left: 95%;
  background-color: ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
  color: ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
  border-radius: 2em;
  animation: RenderBtn 1s linear forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  @keyframes RenderBtn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  :hover {
    transform: scale(1.2);
  }
  @media (max-width: 1350px) {
    left: 90%;
  }
  @media (max-width: 700px) {
    left: 85%;
    width: 3em;
    height: 3em;
  }

  svg {
    font-size: 30px;
    transform: rotate(45deg);
  }
`;

type ScrollToTopBtnProps = {
  theme: string;
};

export default function ScrollToTopBtn({ theme }: ScrollToTopBtnProps) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <ScrollToTopContainer onClick={scrollToTop} $theme={theme}>
      <RxArrowTopLeft />
    </ScrollToTopContainer>
  );
}
