"use client";

import { useEffect, useState } from "react";
import { getCountries } from "@/lib/api";

import styles from "./page.module.scss";

import Card from "../Card/card";
import Loading from "./loading";

function Page({
  countryStr,
  selectVal,
}: {
  countryStr: string | never;
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

  if (countryStr.length >= 1 && !selectVal.length) {
    let newData = data.filter((country: any) => {
      return country?.name.official.includes(countryStr);
    });

    return newData.length ? (
      <section className={styles.countries_grid}>
        {newData.map((country: any) => {
          return <Card key={country?.name.official} country={country} />;
        })}
      </section>
    ) : (
      <h2>No Country with {countryStr} found.</h2>
    );
  }

  if (selectVal && !countryStr.length) {
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

  if (countryStr.length && selectVal) {
    let newData = data.filter((country: any) => {
      return (
        country?.region.toLowerCase() === selectVal &&
        country?.name.official.toLowerCase().includes(countryStr.toLowerCase())
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
        The {countryStr} might not be a valid country or the country{" "}
        {countryStr} you are looking for is not present in{" "}
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

export default Page;
