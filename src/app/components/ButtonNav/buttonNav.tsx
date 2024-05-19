import Link from "next/link";
import Image from "next/image";

import goBack from "/public/go_back.svg";
import goBack_dark from "/public/go_back_dark.svg";
import styles from "@/app/components/ButtonNav/buttonNav.module.scss";

export default function ButtonNav() {
  return (
    <Link
      style={{ display: "inline-block", textDecoration: "none" }}
      href={"/"}
    >
      <div className={styles.btn}>
        <Image src={goBack} alt="click to go home" />
        <p>Back</p>
      </div>
    </Link>
  );
}
