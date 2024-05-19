"use client";
import styles from "@/app/components/Input/input.module.scss";
import search from "/public/search.svg";
import Image from "next/image";
import { HTMLProps, useState } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  countryStr: string;
  setCountryStr: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ countryStr, setCountryStr }: InputProps) {
  return (
    <div className={styles.input_wrapper}>
      <Image className={styles.img} src={search} alt="Search Icon" />
      <input
        className={styles.input}
        type="text"
        value={countryStr}
        onChange={(e) => setCountryStr(e.target.value)}
        placeholder="Search for a country..."
        autoComplete="off"
      />
    </div>
  );
}
