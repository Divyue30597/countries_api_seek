import Link from "next/link";
import Image from "next/image";
import goBack from "../../../../public/go_back.svg";
import styles from "@/app/components/ButtonNav/buttonNav.module.scss";

export default function ButtonNav() {
  return (
    <Link
      style={{ display: "inline-block", textDecoration: "none" }}
      href={"/"}
    >
      <div className={styles.btn}>
        <svg
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
            fill="#848484"
          />
        </svg>
        <p>Back</p>
      </div>
    </Link>
  );
}
