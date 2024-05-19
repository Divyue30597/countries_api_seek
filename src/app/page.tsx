"use client";

import styles from "./page.module.scss";
import Container from "./components/Container/container";
import Input from "./components/Input/input";
import Dropdown from "./components/DropDown/dropdown";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import CardSection from "./components/CardSection/page";

export default function Home() {
  const [input, setInput] = useState("");
  const [selectVal, setSelectVal] = useState("all");
  const debounceVal = useDebounce<string>(input, 1000);

  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.input_fields}>
          <Input input={input} setInput={setInput} />
          <Dropdown selectVal={selectVal} setSelectVal={setSelectVal} />
        </section>
        <CardSection debounceVal={debounceVal} selectVal={selectVal} />
      </Container>
    </main>
  );
}
