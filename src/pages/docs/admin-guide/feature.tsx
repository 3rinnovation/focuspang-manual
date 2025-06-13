// 초등학교 추가로 구조 변경 전 기존 focuspang 홈페이지에서 연동된 경로 임의 수정

import { Redirect } from "@docusaurus/router";

export default function RedirectOldFeaturePage() {
  return <Redirect to="/" />;
}
