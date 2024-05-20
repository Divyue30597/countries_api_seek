"use client";
import Image from "next/image";

import styles from "@/app/components/DropDown/dropdown.module.scss";
import expand from "/public/expand.svg";
import { Dispatch, SetStateAction, useState } from "react";

const regions = [
  {
    id: 1,
    value: "africa",
    name: "Africa",
  },
  {
    id: 2,
    value: "americas",
    name: "Americas",
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

interface DropDownProps {
  selectVal: string;
  setSelectVal: Dispatch<SetStateAction<string>>;
}

export default function Dropdown({ selectVal, setSelectVal }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div tabIndex={0} className={styles.dropdown}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <p>{selectVal.length ? selectVal : "Filter by Region"}</p>
        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="expand-more">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.875 0.875L4 3.75L1.125 0.875L0.25 1.75L4 5.5L7.75 1.75L6.875 0.875Z"
              fill="#848484"
            />
          </g>
        </svg>
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
