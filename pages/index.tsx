import ErrorBoundary from "views/ErrorBoundary";
import Home from "views/Home";

export default function home() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
