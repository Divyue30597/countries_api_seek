export async function getCountries() {
  let res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}
