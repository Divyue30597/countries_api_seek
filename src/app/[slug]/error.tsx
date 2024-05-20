"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "3.2rem", marginBottom: "2.4rem" }}>
        Something went wrong! 💥💣
      </h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <button
          style={{
            padding: "1.2rem 2rem",
            fontSize: "2rem",
            fontWeight: "600",
            backgroundColor: "var(--header-bg-color)",
            border: "none",
            borderRadius: "0.8rem",
            cursor: "pointer",
            color: "var(--font-color)",
            outline: "var(--font-color) 0.3rem solid",
          }}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <Link
          href={"/"}
          style={{
            textDecoration: 'none',
            padding: "1.2rem 2rem",
            fontSize: "2rem",
            fontWeight: "800",
            backgroundColor: "var(--header-bg-color)",
            border: "none",
            borderRadius: "0.8rem",
            cursor: "pointer",
            color: "var(--font-color)",
            outline: "var(--font-color) 0.3rem solid",
          }}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
