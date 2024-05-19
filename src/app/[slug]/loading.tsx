import styles from "@/app/[slug]/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.full_page}>
      <div className={styles.button}></div>
      <div className={styles.country_detail}>
        <div className={styles.image}></div>
        <div className={styles.details_body}>
          <div className={styles.heading}></div>
          <div className={styles.details}>
            <div className={styles.major_details}>
              <div className={styles.para}></div>
              <div className={styles.para}></div>
              <div className={styles.para}></div>
              <div className={styles.para}></div>
              <div className={styles.para}></div>
            </div>
            <div className={styles.minor_details}>
              <div className={styles.para}></div>
              <div className={styles.para}></div>
              <div className={styles.para}></div>
            </div>
          </div>
          <div className={styles.border_countries}>
            <div className={styles.border_heading}></div>
            <div className={styles.border_country}>
              <div className={styles.country}>P</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
