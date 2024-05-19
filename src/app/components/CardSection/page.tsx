import { useEffect, useState } from "react";
import { getCountries } from "@/api/api";

import styles from "./page.module.scss";

import Card from "../Card/card";
import Loading from "./loading";

export default function CardSection({
  debounceVal,
  selectVal,
}: {
  debounceVal: string;
  selectVal: string;
}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await getCountries();
        setData(res);
        setIsLoading(true);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (debounceVal.length >= 1) {
    let newData = data.filter((country: any) => {
      return country.name.official.includes(debounceVal);
    });

    return newData.length ? (
      <section className={styles.countries_grid}>
        {newData.map((country: any) => {
          return <Card key={country.name.official} country={country} />;
        })}
      </section>
    ) : (
      <h2>No Country with {debounceVal} found.</h2>
    );
  }

  if (selectVal.includes("region")) {
    let newData = data.filter((country: any) => {
      return country.region.toLowerCase() === selectVal.split("/")[1];
    });

    return (
      <section className={styles.countries_grid}>
        {newData.map((country: any) => {
          return <Card key={country.name.official} country={country} />;
        })}
      </section>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={styles.countries_grid}>
      {data.map((country: any) => {
        return <Card key={country.name.official} country={country} />;
      })}
    </section>
  );
}
