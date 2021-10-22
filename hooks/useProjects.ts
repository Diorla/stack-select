import { useEffect, useState } from "react";
import fetchProjects from "services/fetchProjects";

export default function useProjects(uid?: string) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    if (uid && mounted) {
      fetchProjects(uid, (projects) => {
        setProjects(projects);
        setLoading(false);
      }).catch((err) => setError(err));
    }
    return () => {
      mounted = false;
    };
  }, [uid]);
  return { projects, loading, error };
}
