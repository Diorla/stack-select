import React from "react";

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
  return <div>Sign up here</div>;
}
