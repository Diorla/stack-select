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

const Left = () => (
  <Row>
    <Logo />
    <Hidden xsDown>
      <Title />
    </Hidden>
  </Row>
);
export default function Header() {
  const isLoggedIn = true;
  if (isLoggedIn)
    return (
      <Appbar>
        <Left />
        <Hidden smDown>
          <SearchInput />
        </Hidden>
        <Row>
          <Avatar src="https://github.com/Diorla.png" alt="user image" />
          <Text>Ade Adeola</Text>
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
