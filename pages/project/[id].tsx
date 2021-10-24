import { useRouter } from "next/router";
import ErrorBoundary from "views/ErrorBoundary";
import Project from "views/Project";

export default function project() {
  const {
    query: { id },
  } = useRouter();

  const projectId = Array.isArray(id) ? id[0] : id;
  if (id)
    return (
      <ErrorBoundary>
        <Project id={projectId || ""} />
      </ErrorBoundary>
    );
  return <div>Loading</div>;
}
