import styled from "styled-components";

type BodyProps = {
  children: React.ReactNode;
};

export default function Body({ children }: BodyProps) {
  const Body = styled.body`
    background-color: #eff1ef;
    font-family: "Roboto";
  `;

  return <Body>{children}</Body>;
}
