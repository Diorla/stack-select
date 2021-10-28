import { useRouter } from "next/router";
import ErrorBoundary from "views/ErrorBoundary";
import Project from "views/Project";

export default function project() {
  const {
    query: { slug },
  } = useRouter();

  const projectId = Array.isArray(slug) ? slug[0] : slug;
  if (slug)
    return (
      <ErrorBoundary>
        {projectId ? <Project id={projectId} /> : null}
      </ErrorBoundary>
    );
  return <div>Loading</div>;
}
