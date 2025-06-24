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
      buttonText: "매뉴얼 보기",
      className: styles.cardGreen,
      path: `${siteConfig.baseUrl}docs/elementary`,
    },
    {
      icon: "/img/icon-middlehigh.svg",
      title: "중고등학교용",
      buttonText: "매뉴얼 보기",
      className: styles.cardBlue,
      path: `${siteConfig.baseUrl}docs/middlehigh`,
    },
    {
      icon: "/img/icon-qna.svg",
      title: "즉문즉답",
      buttonText: "질문하기",
      className: styles.cardYellow,
      path: "https://focuspang.com//ask.html",
    },
  ];

  return (
    <Layout title="포커스팡에 오신 것을 환영합니다">
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>포커스팡 이용 가이드</h1>
          <p className={styles.subTitle}>
            포커스팡은 선생님을 위한 오프라인 면대면 수업운영 서비스와
            <br />
            학생을 위한 집중력, 학습 습관과 마음 건강 케어 서비스를 제공합니다.
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
                    alt={`${card.title} 아이콘`}
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
