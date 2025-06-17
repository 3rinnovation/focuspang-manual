import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const quickStartCards = [
    {
      icon: "/img/icon-elementary.svg",
      title: "초등학교용",
      description: "초등학교 선생님을 위한\n관리자/선생님/학생 페이지 가이드",
      className: styles.cardGreen,
      path: `${siteConfig.baseUrl}docs/elementary`,
    },
    {
      icon: "/img/icon-middlehigh.svg",
      title: "중고등학교용",
      description: "중고등학교 선생님을 위한\n관리자/선생님/학생 페이지 가이드",
      className: styles.cardBlue,
      path: `${siteConfig.baseUrl}docs/middlehigh`,
    },
  ];

  return (
    <Layout title="포커스팡에 오신 것을 환영합니다">
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>포커스팡 이용 가이드</h1>
          <p className={styles.subtitle}>
            포커스팡은 <b>선생님을 위한</b> 오프라인 면대면 수업운영 서비스와
            <br />
            <b>학생을 위한</b> 집중력, 학습 습관과 마음 건강 케어 서비스를
            제공합니다.
          </p>
        </div>
        <section className={styles.section}>
          <div className={styles.cardGrid}>
            {quickStartCards.map((card, index) => (
              <div key={index} className={`${styles.card} ${card.className}`}>
                <div className={styles.cardIcon}>
                  <img
                    src={card.icon || "/placeholder.svg"}
                    alt={`${card.title} 아이콘`}
                    className={styles.iconSvg}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <Link to={card.path} className={styles.cardButton}>
                  바로가기
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
