import SignIn from "views/SignIn";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Container from "components/Container";
import Main from "components/Main";

export default function Layout({
  children,
  activePath,
}: {
  children: React.ReactNode;
  activePath: "home" | "stack" | "tool" | "settings";
}) {
  const isLoggedIn = true;
  return (
    <Container>
      <Header />
      {isLoggedIn ? (
        <Main>
          <Sidebar activePath={activePath} />
          {children}
        </Main>
      ) : (
        <SignIn />
      )}
    </Container>
  );
}
