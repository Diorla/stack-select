import SignIn from "views/SignIn";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Container from "components/Container";
import Main from "components/Main";
import { useUser } from "context";

export default function Layout({
  children,
  activePath,
}: {
  children: React.ReactNode;
  activePath: "home" | "stack" | "tool" | "settings";
}) {
  const { user } = useUser();
  return (
    <Container>
      <Header />
      {user.uid ? (
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
