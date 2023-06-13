import styled from "styled-components";
import { useState, useEffect } from "react";

type IntroProps = {
  closeIntroContainer(): void;
  access: boolean;
};

export default function Intro({ closeIntroContainer, access }: IntroProps) {
  const textToWrite = "Olá, sou Artur Watanabe";
  const textToWrite2 = "Desenvolvedor Full Stack.";

  const [text, setText] = useState({
    text: "",
    completed: false,
  });
  const [text2, setText2] = useState({
    text: "",
    completed: false,
  });

  const Intro = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    overflow: hidden;

    &.animation {
      animation: CloseIntro 2s forwards;

      @keyframes CloseIntro {
        from {
          filter: blur(0);
          height: 100vh;
        }
        to {
          height: 0vh;
          filter: blur(4px);
        }
      }
    }
  `;

  const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 30%;

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button {
      border: none;
      width: 10em;
      background-color: #222;
      border: 1px solid white;
      color: white;
      height: 2.5em;
      border-radius: 3em;
      transition: 0.5s;
      font-size: 20px;
      opacity: 0;
      animation: PopUpBtn 2s forwards;

      &.visible {
        opacity: 1;
      }

      :hover {
        background-color: white;
        border: 1px solid #222;
        color: #222;
      }

      @keyframes PopUpBtn {
        from {
          opacity: 0;
          transform: scale(0);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  `;

  const TextContainers = styled.div`
    h1 {
      width: 100%;
      font-size: 40px;
      border-right: ${text.completed ? "none" : "1px solid white"};
    }
    p {
      width: 100%;

      font-size: 30px;
      animation: typingBorderAnimation 1.5s infinite;
      padding-right: 0.2em;
      border-right: ${text2.completed ? "none" : "1px solid white"};
      text-align: left;
      text-align: center;
      margin-top: 2em;
      font-size: 20px;
    }

    @keyframes typingBorderAnimation {
      from {
        box-shadow: 1px 0px 0px 0px white;
      }
      to {
        box-shadow: none;
      }
    }
  `;

  let letter = 0;

  useEffect(() => {
    const write = setInterval(() => {
      setText((prevText) => {
        const newText = textToWrite.slice(0, letter);
        if (prevText.text.length === textToWrite.length) {
          setText({
            text: prevText.text,
            completed: true,
          });
          clearInterval(write);
        }
        letter++;
        return {
          text: newText,
          completed: false,
        };
      });
    }, 150);

    return () => {
      clearInterval(write);
    };
  }, []);
  useEffect(() => {
    const write2 = setInterval(() => {
      if (text.text.length === textToWrite.length) {
        setText2((prevText) => {
          const newText = textToWrite2.slice(0, letter);
          if (prevText.text.length === textToWrite2.length) {
            setText2({
              text: prevText.text,
              completed: true,
            });
            clearInterval(write2);
          }
          letter++;
          return {
            text: newText,
            completed: false,
          };
        });
      }
    }, 100);

    return () => {
      clearInterval(write2);
    };
  }, [text]);

  return (
    <Intro className={access ? "animation" : ""}>
      <IntroContainer>
        <div>
          <TextContainers>
            <h1>{text.text}</h1>
          </TextContainers>
          <TextContainers>
            <p>{text2.text}</p>
          </TextContainers>
        </div>
        {text2.completed ? (
          <button onClick={closeIntroContainer}>Acessar</button>
        ) : null}
      </IntroContainer>
    </Intro>
  );
}
