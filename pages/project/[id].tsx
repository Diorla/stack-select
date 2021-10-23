import { useRouter } from "next/router";

export default function project() {
  const {
    query: { id },
  } = useRouter();
  if (id) return <div>Project</div>;
  return <div>Loading</div>;
}
