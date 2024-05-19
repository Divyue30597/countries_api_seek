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
  const [error, setError] = useState<any>();

  useEffect(() => {
    async function getData() {
      try {
        const res = await getCountries();
        setData(res);
        setIsLoading(true);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (debounceVal.length >= 1 && !selectVal.length) {
    let newData = data.filter((country: any) => {
      return country?.name.official.includes(debounceVal);
    });

    return newData.length ? (
      <section className={styles.countries_grid}>
        {newData.map((country: any) => {
          return <Card key={country?.name.official} country={country} />;
        })}
      </section>
    ) : (
      <h2>No Country with {debounceVal} found.</h2>
    );
  }

  if (selectVal && !debounceVal.length) {
    let newData = data.filter((country: any) => {
      return country?.region.toLowerCase() === selectVal;
    });

    return (
      <section className={styles.countries_grid}>
        {newData.map((country: any) => {
          return <Card key={country?.name.official} country={country} />;
        })}
      </section>
    );
  }

  if (debounceVal.length && selectVal) {
    let newData = data.filter((country: any) => {
      return (
        country?.region.toLowerCase() === selectVal &&
        country?.name.official.toLowerCase().includes(debounceVal.toLowerCase())
      );
    });

    return newData.length ? (
      <section className={styles.countries_grid}>
        {newData.map((country: any) => {
          return <Card key={country?.name.official} country={country} />;
        })}
      </section>
    ) : (
      <h1>
        The Country you are looking for is not present in{" "}
        {selectVal[0].toUpperCase() + selectVal.slice(1)}.
      </h1>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h2>💣💥 There was some error! Try to reload the page.</h2>;
  }

  return (
    <section className={styles.countries_grid}>
      {data.map((country: any) => {
        return <Card key={country?.name.official} country={country} />;
      })}
    </section>
  );
}
