import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    //<Redirect to={`${siteConfig.baseUrl}docs/elementary/admin-guide/feature`} />
    <Layout title="포커스팡에 오신 것을 환영합니다">
      <main style={{ textAlign: "center", padding: "3rem" }}>
        <h1>포커스팡에 오신 걸 환영합니다 🎉</h1>
        <p>
          포커스팡은 <b>선생님을 위한</b> 오프라인 면대면 수업운영 서비스와
        </p>
        <p>
          <b>학생을 위한</b> 집중력, 학습 습관과 마음 건강 케어 서비스를
          제공합니다.
        </p>
        <br />
        <h3>상단에서 학교별/언어별 매뉴얼을 선택하실 수 있습니다.</h3>
      </main>
    </Layout>
  );
}
