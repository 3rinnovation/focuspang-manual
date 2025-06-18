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
      buttonText: "Learn More",
      className: styles.cardGreen,
      path: `${siteConfig.baseUrl}docs/elementary`,
    },
    {
      icon: "/img/icon-middlehigh.svg",
      title: "For Middle & High Schools",
      buttonText: "Learn More",
      className: styles.cardBlue,
      path: `${siteConfig.baseUrl}docs/middlehigh`,
    },
    {
      icon: "/img/icon-kakaotalk.svg",
      title: "KakaoTalk Help",
      buttonText: "Contact Us",
      className: styles.cardYellow,
      path: "https://pf.kakao.com/_xjxgGDxj",
    },
  ];

  return (
    <Layout title="Welcome to Focuspang">
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>How to Use focuspang</h1>
          <p className={styles.subTitle}>
            focuspang provides an offline, face-to-face class management service
            for teachers,
            <br />
            along with focus, study habit, and mental healthcare services for
            students.
          </p>
        </div>
        <section className={styles.section}>
          <div className={styles.cardGrid}>
            {quickStartCards.map((card, index) => (
              <Link
                key={index}
                to={card.path}
                className={`${styles.card} ${card.className}`}
              >
                <div className={styles.cardIcon}>
                  <img
                    src={card.icon || "/placeholder.svg"}
                    alt={`${card.title} icon`}
                    className={styles.iconSvg}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardButton}>{card.buttonText}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
