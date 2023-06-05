import styled from "styled-components";

type ContentContainerProps = {
  width: string;
  height: string;
  padding?: string;
  margin?: string;
  children: React.ReactNode;
};

export default function ContentContainer(props: ContentContainerProps) {
  const ContentContainer = styled.div`
    width: ${props.width};
    margin: 3em 0 2em 0;
    padding: ${props.padding || "0"};
    background-color: #5d5d5f;
    border-radius: 20px;
  `;

  return <ContentContainer>{props.children}</ContentContainer>;
}
