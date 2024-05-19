import { HTMLProps } from "react";
import styles from "@/app/components/Badge/badge.module.scss";
import Link from "next/link";

interface BadgeProps extends HTMLProps<HTMLDivElement> {
  cca3: string;
}

async function getCountriesName(cca3: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${cca3}?fields=name`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Badge({ cca3 }: BadgeProps) {
  const data = await getCountriesName(cca3);

  return (
    <Link href={`/${cca3}`} className={styles.badge}>
      {data?.name.common}
    </Link>
  );
}
