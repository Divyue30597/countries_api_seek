"use client";
import Image from "next/image";

import styles from "@/app/components/DropDown/dropdown.module.scss";
import expand from "/public/expand.svg";
import { Dispatch, SetStateAction, useState } from "react";

const regions = [
  {
    id: 1,
    value: "region/africa",
    name: "Africa",
  },
  {
    id: 2,
    value: "region/americas",
    name: "Americas",
  },
  {
    id: 3,
    value: "region/asia",
    name: "Asia",
  },
  {
    id: 4,
    value: "region/europe",
    name: "Europe",
  },
  {
    id: 5,
    value: "region/oceania",
    name: "Oceania",
  },
];

interface DropDownProps {
  selectVal: string;
  setSelectVal: Dispatch<SetStateAction<string>>;
}

export default function Dropdown({ selectVal, setSelectVal }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div tabIndex={0} className={styles.dropdown}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <p>
          {selectVal.includes("/")
            ? selectVal.split("/")[1]
            : "Filter by Region"}
        </p>
        <Image src={expand} alt="Expand list" />
      </div>
      <ul className={isOpen ? styles.active : styles.inactive}>
        {regions.map((region) => {
          return (
            <li key={region.id}>
              <button
                onClick={() => {
                  setSelectVal(region.value);
                  setIsOpen(!isOpen);
                }}
              >
                {region.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
