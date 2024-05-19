import styles from "@/app/components/CardSection/loading.module.scss";

export default function Loading() {
  const sampleArrayLoading = Array.from({ length: 10 }, (v, i) => i);
  return (
    <div className={styles.outer_skeleton}>
      {sampleArrayLoading.map((_, index) => {
        return (
          <div key={index} className={styles.skeleton}>
            <div className={styles.skeleton_image}></div>
            <div className={styles.skeleton_body}>
              <div className={styles.skeleton_heading}></div>
              <div className={styles.skeleton_para}></div>
              <div className={styles.skeleton_para}></div>
              <div className={styles.skeleton_para}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
