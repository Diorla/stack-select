import React from "react";
import getInitials from "scripts/getInitials";
import Avatar from "./Avatar";
import Hidden from "./Hidden";
import Text from "components/Text";

export default function Profile({
  photoURL,
  displayName,
}: {
  photoURL: string;
  displayName: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: 4 }}>
      {photoURL ? (
        <Avatar src={photoURL} alt="user image" />
      ) : (
        <Avatar title={getInitials(displayName)} />
      )}
      <Hidden smDown>
        <Text>{displayName.slice(0, 10)}</Text>
      </Hidden>
    </div>
  );
}
