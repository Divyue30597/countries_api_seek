"use client";
import Image from "next/image";

import styles from "@/app/components/DropDown/dropdown.module.scss";
import expand from "/public/expand.svg";
import { useState } from "react";

const regions = [
  {
    id: 1,
    value: "africa",
    name: "Africa",
  },
  {
    id: 2,
    value: "america",
    name: "America",
  },
  {
    id: 3,
    value: "asia",
    name: "Asia",
  },
  {
    id: 4,
    value: "europe",
    name: "Europe",
  },
  {
    id: 5,
    value: "oceania",
    name: "Oceania",
  },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div tabIndex={0} className={styles.dropdown}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <p>Filter by Region</p>
        <Image src={expand} alt="Expand list" />
      </div>
      <ul className={isOpen ? styles.active : styles.inactive}>
        {regions.map((region) => {
          return (
            <li key={region.id} value={region.value}>
              {region.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
