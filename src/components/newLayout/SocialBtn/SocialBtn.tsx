import styled from "styled-components";

const Button = styled.button<{ $btnColor: string }>`
  background-color: ${(props) => props.$btnColor};
  width: 10em;
  height: 2.5em;
  border: none;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
  img {
    font-size: 30px;
  }
  svg {
    font-size: 20px;

    color: #fff;
  }
`;

type BtnProps = {
  name: string;
  btnColor: string;
  children: React.ReactNode;
};

export default function SocialBtn({ name, btnColor, children }: BtnProps) {
  return (
    <Button $btnColor={btnColor}>
      {children}
      <p>{name}</p>
    </Button>
  );
}
