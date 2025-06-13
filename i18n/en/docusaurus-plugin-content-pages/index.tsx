import React from "react";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Welcome to Focuspang"
      description="Focuspang English landing page"
    >
      <main style={{ textAlign: "center", padding: "3rem" }}>
        <h1>Welcome to Focuspang 🎉</h1>
        <p>
          focuspang provides an offline, face-to-face class management service
          for teachers,
        </p>
        <p>
          along with focus, study habit, and mental healthcare services for
          students.
        </p>
        <br />
        <h3>
          You can select the manual for each school and language at the top.
        </h3>
      </main>
    </Layout>
  );
}
