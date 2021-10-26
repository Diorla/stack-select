import React from "react";
import { useUser } from "context";
import { Logo } from "components/Logo";
import AppBar from "components/AppBar";
import Profile from "components/Profile";

export default function NoSearchAppBar() {
  const {
    user: { photoURL, displayName },
  } = useUser();
  return (
    <AppBar>
      <Logo />
      <Profile photoURL={photoURL} displayName={displayName} />
    </AppBar>
  );
}
