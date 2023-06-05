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
    justify-content: space-between;
    padding: 4% 20% 0% 20%;
  `;

  return <Container>{children}</Container>;
}
