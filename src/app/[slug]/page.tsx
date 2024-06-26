import styles from "@/app/[slug]/page.module.scss";
import Container from "../components/Container/container";
import ButtonNav from "../components/ButtonNav/buttonNav";
import Image from "next/image";
import Badge from "../components/Badge/badge";

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

  const getLanguages = () => {
    const keys = Object.keys(data.languages);
    return keys.length
      ? keys.map((key, index) => {
          return (
            <span key={key}>
              {data?.languages[key]}
              {index !== keys.length - 1 && ", "}
            </span>
          );
        })
      : "NA";
  };

  const getCurrencies = () => {
    const keys = Object.keys(data.currencies);
    return keys.length
      ? keys?.map((key, index) => {
          return (
            <span key={key}>
              {data?.currencies[key].name}
              {index !== keys.length - 1 && ", "}
            </span>
          );
        })
      : "NA";
  };

  const getNativeNames = () => {
    const keys = Object.keys(data.name.nativeName);
    return (
      <span>
        {keys.length ? data?.name?.nativeName[keys[0]]?.official : "NA"}
      </span>
    );
  };

  return (
    <Container>
      <ButtonNav />
      <div className={styles.country_detail}>
        <div className={styles.image}>
          <img
            src={data?.flags.png}
            alt={data?.flags.alt}
            width={320}
            height={200}
          />
        </div>

        <div className={styles.details_body}>
          <h1>{data?.name.official}</h1>
          <div className={styles.details}>
            <div className={styles.major_details}>
              <p>
                Native name: <span>{getNativeNames()}</span>
              </p>
              <p>
                Population:{" "}
                <span>{data?.population.toLocaleString("en-US") || "NA"}</span>
              </p>
              <p>
                Region: <span>{data?.region || "NA"}</span>
              </p>
              <p>
                Sub Region: <span>{data?.subregion || "NA"}</span>
              </p>
              <p>
                Capital:{" "}
                {data?.capital.length
                  ? data?.capital.map((cap: string, index: number) => {
                      return (
                        <span key={`${cap.toLowerCase() + index}`}>{cap}</span>
                      );
                    })
                  : "NA"}
              </p>
            </div>
            <div className={styles.minor_details}>
              <p>
                Top Level Domain: <span>{data?.tld || "NA"}</span>
              </p>
              <p>Currencies: {getCurrencies()}</p>
              <p>Languages: {getLanguages()}</p>
            </div>
          </div>
          {data?.borders.length >= 1 && (
            <div className={styles.border_countries}>
              <h2>Border Countries</h2>
              <div className={styles.country}>
                {data?.borders.map((border: string) => {
                  return (
                    <Badge key={border.toLowerCase()} cca3={border}>
                      {border}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
