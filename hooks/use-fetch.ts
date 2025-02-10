/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "sonner";

type CallbackFn<T> = (...args: T[]) => Promise<T>;

const useFetch = <T extends object>(callback: CallbackFn<T>) => {
  const [data, setData] = useState<Awaited<T> | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fn = async (...args: T[]) => {
    setLoading(true);
    setError(null);

    try {
      const response = await callback(...args);
      setData(response);
      setError(null);
    } catch (error: any) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
