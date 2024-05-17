import { ReactNode } from "react";
import styles from "@/app/components/Container/container.module.scss";

export default function Container({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
