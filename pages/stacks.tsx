import ErrorBoundary from "views/ErrorBoundary";
import Stacks from "views/Stacks";

export default function stack() {
  return (
    <ErrorBoundary>
      <Stacks />
    </ErrorBoundary>
  );
}
