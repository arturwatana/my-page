import styled from "styled-components";
import AOS from "aos";
import { useEffect } from "react";

type ContentContainerProps = {
  width: string;
  height?: string;
  padding?: string;
  margin?: string;
  fade?: string;
  children: React.ReactNode;
};

export default function ContentContainer(props: ContentContainerProps) {
  const ContentContainer = styled.div`
    width: ${props.width};
    height: ${props.height || ""};
    margin: ${props.margin || "0"};
    padding: ${props.padding || "0"};
    background-color: #c6c2c7;
    border-radius: 20px;
    display: flex;
  `;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <ContentContainer data-aos={props.fade}>{props.children}</ContentContainer>
  );
}
