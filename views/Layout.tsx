import SignIn from "views/SignIn";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Container from "components/Container";
import Main from "components/Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isLoggedIn = true;
  return (
    <Container>
      <Header />
      {isLoggedIn ? (
        <Main>
          <Sidebar activePath="home" />
          {children}
        </Main>
      ) : (
        <SignIn />
      )}
    </Container>
  );
}
