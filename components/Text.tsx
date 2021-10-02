import styled from "styled-components";

const Header1 = styled.h1`
  font-size: 2rem;
  margin: 0.2rem;
  letter-spacing: 0.1rem;
`;
const Header2 = styled.h2`
  font-size: 1.8rem;
  margin: 0.15rem;
  letter-spacing: 0.08rem;
`;
const Header3 = styled.h3`
  font-size: 1.6rem;
  margin: 0.1rem;
  letter-spacing: 0.06rem;
`;
const Header4 = styled.h4`
  font-size: 1.4rem;
  margin: 0.5rem;
  letter-spacing: 0.04rem;
`;
const Header5 = styled.h5``;
const Header6 = styled.h6``;
const Body1 = styled.div`
  font-size: 1rem;
  letter-spacing: 0.04rem;
`;
const Body2 = styled.div`
  font-size: 0.8rem;
  letter-spacing: 0.02rem;
`;
const Subtitle1 = styled.div``;
const Subtitle2 = styled.div``;
const Caption = styled.div``;
const Overline = styled.div``;

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline";
}

export default function Text({ variant, ...props }: TextProps) {
  if (variant === "h1") return <Header1 {...props} />;
  if (variant === "h2") return <Header2 {...props} />;
  if (variant === "h3") return <Header3 {...props} />;
  if (variant === "h4") return <Header4 {...props} />;
  if (variant === "h5") return <Header5 {...props} />;
  if (variant === "h6") return <Header6 {...props} />;
  if (variant === "body2") return <Body2 {...props} />;
  if (variant === "subtitle1") return <Subtitle1 {...props} />;
  if (variant === "subtitle2") return <Subtitle2 {...props} />;
  if (variant === "caption") return <Caption {...props} />;
  if (variant === "overline") return <Overline {...props} />;
  return <Body1 {...props} />;
}
