import { useRouter } from "next/router";
import ErrorBoundary from "views/ErrorBoundary";
import Tool from "views/Tool";

export default function tool() {
  const {
    query: { slug },
  } = useRouter();

  const toolId = Array.isArray(slug) ? slug[0] : slug;
  if (slug)
    return (
      <ErrorBoundary>{toolId ? <Tool id={toolId} /> : null}</ErrorBoundary>
    );
  return <div>Loading</div>;
}
