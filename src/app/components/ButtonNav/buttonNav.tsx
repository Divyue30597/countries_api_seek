"use client";
import Image from "next/image";

import goBack from "/public/go_back.svg";
import styles from "@/app/components/ButtonNav/buttonNav.module.scss";
import { useRouter } from "next/navigation";

export default function ButtonNav() {
  const router = useRouter();

  return (
    <button className={styles.btn} onClick={() => router.push("/")}>
      <Image src={goBack} alt="click to go home" />
      <p>Back</p>
    </button>
  );
}
