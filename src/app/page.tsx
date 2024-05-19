"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import Container from "./components/Container/container";
import Input from "./components/Input/input";
import Dropdown from "./components/DropDown/dropdown";
import CardSection from "./components/CardSection/CardSection";

export default function Home() {
  const [countryStr, setCountryStr] = useState<string>("");
  const [selectVal, setSelectVal] = useState<string>("");

  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.input_fields}>
          <Input countryStr={countryStr} setCountryStr={setCountryStr} />
          <Dropdown selectVal={selectVal} setSelectVal={setSelectVal} />
        </section>
        <CardSection countryStr={countryStr} selectVal={selectVal} />
      </Container>
    </main>
  );
}
