// lib/useFetch.ts
import useSWR from "swr";

export function useFetch<T>(url: string) {
  const { data, error, mutate } = useSWR<T>(url, fetcher);

  return { data, error, mutate };
}

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
