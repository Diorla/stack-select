import React from "react";
import Title from "./Title";
import Row from "./Row";
import Logo from "./Logo";
import Appbar from "./Appbar";
import Button from "./Button";
import Avatar from "./Avatar";
import SearchInput from "./SearchInput";
import Hidden from "./Hidden";
import Text from "./Text";
import { useUser } from "context";
import getInitials from "scripts/getInitials";

const Left = () => (
  <Row>
    <Logo />
    <Hidden mdDown>
      <Title />
    </Hidden>
  </Row>
);
export default function Header() {
  const { user } = useUser();
  if (user.uid)
    return (
      <Appbar>
        <Left />
        <Hidden smDown>
          <SearchInput />
        </Hidden>
        <Row>
          {user.photoURL ? (
            <Avatar src={user.photoURL} alt="user image" />
          ) : (
            <Avatar title={getInitials(user.displayName)} />
          )}
          <Hidden smDown>
            <Text>{user.displayName.slice(0, 10)}</Text>
          </Hidden>
        </Row>
      </Appbar>
    );
  return (
    <Appbar>
      <Left />
      <Row>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginRight: "0.4rem" }}
        >
          Sign in
        </Button>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginRight: "0.4rem" }}
        >
          Sign up
        </Button>
      </Row>
    </Appbar>
  );
}
