import { useRouter } from "next/router";
import ErrorBoundary from "views/ErrorBoundary";
import Stack from "views/Stack";

export default function stack() {
  const {
    query: { slug },
  } = useRouter();

  const stackId = Array.isArray(slug) ? slug[0] : slug;
  if (slug)
    return (
      <ErrorBoundary>{stackId ? <Stack id={stackId} /> : null}</ErrorBoundary>
    );
  return <div>Loading</div>;
}
