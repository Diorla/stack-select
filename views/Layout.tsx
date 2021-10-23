import SignIn from "views/SignIn";
import Header from "components/HeaderContent";
import Sidebar from "components/Sidebar";
import Container from "components/Container";
import Main from "components/Main";
import { useUser } from "context";
import path from "interfaces/path";

export default function Layout({
  children,
  activePath,
}: {
  children: React.ReactNode;
  activePath: path;
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
