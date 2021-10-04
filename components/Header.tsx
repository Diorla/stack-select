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

const Left = () => (
  <Row>
    <Logo />
    <Hidden xsDown>
      <Title />
    </Hidden>
  </Row>
);
export default function Header() {
  const { user } = useUser();
  console.log(user.photoURL);
  if (user.uid)
    return (
      <Appbar>
        <Left />
        <Hidden smDown>
          <SearchInput />
        </Hidden>
        <Row>
          <Avatar src={user.photoURL} alt="user image" />
          <Text>{user.displayName.slice(0, 10)}</Text>
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
