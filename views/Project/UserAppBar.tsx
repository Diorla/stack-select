import React from "react";
import SearchInput from "components/SearchInput";
import { useUser } from "context";
import { Logo } from "components/Logo";
import AppBar from "components/AppBarr";
import Profile from "components/Profile";

export default function UserAppBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (args: string) => void;
}) {
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
