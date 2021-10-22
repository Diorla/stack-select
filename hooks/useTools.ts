import { useEffect, useState } from "react";
import fetchTools from "services/fetchTools";

export default function useTools(uid?: string) {
  const [tools, setTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    if (uid && mounted) {
      fetchTools(uid, (tools) => {
        setTools(tools);
        setLoading(false);
      }).catch((err) => setError(err));
    }
    return () => {
      mounted = false;
    };
  }, [uid]);
  return { tools, loading, error };
}
