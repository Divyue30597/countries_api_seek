"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2 style={{ fontSize: "3.2rem", marginBottom: "2.4rem" }}>
          Something went wrong!
        </h2>
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
          // onClick={
          //   // Attempt to recover by trying to re-render the segment
          //   // () => reset()
          // }
        >
          Try again
        </button>
      </body>
    </html>
  );
}
