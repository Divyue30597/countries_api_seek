"use client";
import styles from "@/app/components/Input/input.module.scss";
import search from "/public/search.svg";
import Image from "next/image";
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.input_wrapper}>
      <Image className={styles.img} src={search} alt="Search Icon" />
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a country..."
        autoComplete="off"
      />
    </div>
  );
}
