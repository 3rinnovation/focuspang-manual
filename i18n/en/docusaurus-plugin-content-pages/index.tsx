import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "@site/src/pages/index.module.css";
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const quickStartCards = [
    {
      icon: "/img/icon-elementary.svg",
      title: "For Elementary Schools",
      description: "Guide about\nAdmin/Teacher/Student Page",
      className: styles.cardGreen,
      path: `${siteConfig.baseUrl}docs/elementary`,
    },
    {
      icon: "/img/icon-middlehigh.svg",
      title: "For Middle & High Schools",
      description: "Guide about\nAdmin/Teacher/Student Page",
      className: styles.cardBlue,
      path: `${siteConfig.baseUrl}docs/middlehigh`,
    },
  ];

  return (
    <Layout title="Welcome to Focuspang">
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>How to Use focusPang</h1>
          <p className={styles.subtitle}>
            focuspang provides an offline, face-to-face class management service{" "}
            <b>for teachers</b>,
            <br />
            along with focus, study habit, and mental healthcare services{" "}
            <b>for students.</b>
          </p>
        </div>
        <section className={styles.section}>
          <div className={styles.cardGrid}>
            {quickStartCards.map((card, index) => (
              <div key={index} className={`${styles.card} ${card.className}`}>
                <div className={styles.cardIcon}>
                  <img
                    src={card.icon || "/placeholder.svg"}
                    alt={`${card.title} icon`}
                    className={styles.iconSvg}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <Link to={card.path} className={styles.cardButton}>
                  Click
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
