// 초등학교 추가로 구조 변경 전 기존 teacher focuspang 사이트에서 연동된 경로 임의 수정

import { Redirect } from "@docusaurus/router";

export default function RedirectTeacherGuideLogin() {
  return <Redirect to="/docs/middlehigh/teacher-guide" />;
}
