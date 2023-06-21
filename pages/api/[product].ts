export default async function ProductInfo() {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      a: 10,
      b: 20,
    }),
  };

  const data = await fetch('localhost:8080/products', options);

  return data
}