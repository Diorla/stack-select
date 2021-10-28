import React from "react";
import SearchInput from "components/SearchInput";
import { useUser } from "context";
import { Logo } from "components/Logo";
import AppBar from "components/AppBar";
import Profile from "components/Profile";

export default function SearchAppBar({
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
      <SearchInput value={value} onChange={(e) => onChange(e.target.value)} />
      <Profile photoURL={photoURL} displayName={displayName} />
    </AppBar>
  );
}
