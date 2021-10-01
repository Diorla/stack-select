import { useEffect, useState } from "react";
import breakpoints from "theme/breakpoints";
export default function Hidden({
  children,
  xsUp,
  xsDown,
  smUp,
  smDown,
  mdUp,
  mdDown,
  lgUp,
  lgDown,
  xlUp,
  xlDown,
}: {
  children: React.ReactNode;
  xsUp?: boolean;
  xsDown?: boolean;
  smUp?: boolean;
  smDown?: boolean;
  mdUp?: boolean;
  mdDown?: boolean;
  lgUp?: boolean;
  lgDown?: boolean;
  xlUp?: boolean;
  xlDown?: boolean;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let mounted = true;
    console.log(window.innerWidth);
    const resizeWindow = () => {
      setWidth(window.innerWidth);
    };
    if (mounted) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", resizeWindow);
    }
    return () => {
      mounted = false;
      window.removeEventListener("resize", resizeWindow);
    };
  });
  if (xsUp && width <= breakpoints.xs) return <>{children}</>;
  if (xsDown && width >= breakpoints.xs) return <>{children}</>;
  if (smUp && width <= breakpoints.sm) return <>{children}</>;
  if (smDown && width >= breakpoints.sm) return <>{children}</>;
  if (mdUp && width <= breakpoints.md) return <>{children}</>;
  if (mdDown && width >= breakpoints.md) return <>{children}</>;
  if (lgUp && width <= breakpoints.lg) return <>{children}</>;
  if (lgDown && width >= breakpoints.lg) return <>{children}</>;
  if (xlUp && width <= breakpoints.xl) return <>{children}</>;
  if (xlDown && width >= breakpoints.xl) return <>{children}</>;
  return null;
}
