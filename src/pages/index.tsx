import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import { Redirect } from "@docusaurus/router";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    //<Redirect to={`${siteConfig.baseUrl}docs/admin-guide/feature`} />
    <header className={styles.heroBanner}>
      <div className="container">포커스팡에 오신 것을 환영합니다</div>
    </header>
    //     <Heading as="h1" className="hero__title">
    //       포커스팡에 오신 것을 환영합니다
    //     </Heading>
    //     <p className="hero__subtitle"></p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/admin-guide/feature"
    //       >
    //         포커스팡 사용 가이드
    //       </Link>
    //     </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
