import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 13em 10em 0em 10em;
  `;

  return <Container>{children}</Container>;
}
