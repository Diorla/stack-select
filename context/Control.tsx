import React from "react";
import SignIn from "views/SignIn";

export default function Control({
  loading,
  userId,
  children,
}: {
  loading: boolean;
  userId: string;
  children: React.ReactNode;
}) {
  if (loading) return <div>Loading</div>;
  if (userId) return <>{children}</>;
  return <SignIn />;
}
