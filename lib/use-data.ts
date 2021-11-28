const cache = {};

async function fetchData(url: string) {
  const res = await fetch(url);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }

  return res.json();
}

export default function useData(url: string, transform?: (data: any) => any) {
  if (!cache[url]) {
    let data;
    let promise;

    cache[url] = () => {
      if (data !== undefined) return data;
      if (!promise) promise = fetchData(url).then((r) => (data = transform ? transform(r) : r));
      throw promise;
    };
  }

  return cache[url]();
}
