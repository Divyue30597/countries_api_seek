import Image from "next/image";

import styles from "@/app/components/Card/card.module.scss";
import Link from "next/link";

export default function Card({ country }: { country: any }) {
  return (
    <Link className={styles.card_link} href={`/${country.cca3}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={country.flags.png}
            alt={country.flags.alt}
            width={260}
            height={200}
          />
        </div>
        <div className={styles.body}>
          <p className={styles.country_name}>{country.name.official}</p>
          <div className={styles.country_detail}>
            <p>
              Population:{" "}
              <span>{country.population.toLocaleString("en-US")}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital:{" "}
              {country.capital.map((cap: string, index: number) => {
                return <span key={`${cap.toLowerCase() + index}`}>{cap}</span>;
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
