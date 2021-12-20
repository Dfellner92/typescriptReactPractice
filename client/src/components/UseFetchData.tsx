import { useState, useEffect } from "react";
export function useFetchData(url: string): {
    data: any,
    done: boolean
} {
  const [data, setData] = useState<any>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}
