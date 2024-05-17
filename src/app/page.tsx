import styles from "./page.module.scss";
import Card from "./components/Card/card";
import Container from "./components/Container/container";
import Input from "./components/Input/input";
import Dropdown from "./components/DropDown/dropdown";

async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getCountries();

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.input_fields}>
          <Input />
          <Dropdown />
        </div>
        <div className={styles.countries_grid}>
          {data.map((country: any) => {
            return <Card key={country.name.official} country={country} />;
          })}
        </div>
      </Container>
    </main>
  );
}
