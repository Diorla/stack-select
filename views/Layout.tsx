import SignIn from 'views/SignIn';
import Header from 'components/Header';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ade01a1a;
  min-height: 100vh;
  width: 100%;
`;
export default function Layout({ children }: { children: React.ReactNode }) {
  const isLoggedIn = Math.floor(Math.random() * 2);
  return (
    <Container>
      <Header />
      {isLoggedIn ? <div>{children}</div> : <SignIn />}
    </Container>
  );
}
