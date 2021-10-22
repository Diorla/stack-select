import { useEffect, useState } from "react";
import fetchStacks from "services/fetchStacks";

export default function useStacks(uid?: string) {
  const [stacks, setStacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    if (uid && mounted) {
      fetchStacks(uid, (stacks) => {
        setStacks(stacks);
        setLoading(false);
      }).catch((err) => setError(err));
    }
    return () => {
      mounted = false;
    };
  }, [uid]);
  return { stacks, loading, error };
}
