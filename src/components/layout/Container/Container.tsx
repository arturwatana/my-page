import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
  padding?: string;
};

export default function Container({ children, padding }: ContainerProps) {
  const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: ${padding || ""};
  `;

  return <Container>{children}</Container>;
}
