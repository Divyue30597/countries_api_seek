import styles from "@/app/[slug]/page.module.scss";
import Container from "../components/Container/container";
import ButtonNav from "../components/ButtonNav/buttonNav";
import Image from "next/image";

async function getSingleCountry(params: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params}?fields=name,population,region,capital,flags,cca3,borders,tld,subregion,languages,currencies`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getSingleCountry(params.slug);

  console.log(data);

  return (
    <Container>
      <ButtonNav />
      <div className={styles.country_detail}>
        <div className={styles.image}>
          <Image
            src={data.flags.png}
            alt={data.flags.alt}
            width={320}
            height={200}
          />
        </div>

        <div className={styles.details_body}>
          <h1>{data.name.official}</h1>
          <div>
            <p>
              Native name: <span>{}</span>
            </p>
            <p>
              Population: <span>{data.population.toLocaleString("en-US")}</span>
            </p>
            <p>
              Region: <span>{data.region}</span>
            </p>
            <p>
              Sub Region: <span>{data.subregion}</span>
            </p>
            <p>
              
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{data.tld}</span>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}
