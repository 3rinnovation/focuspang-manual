import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// 기본 사이드바 정의
const sidebars: SidebarsConfig = {
  adminSidebar: [
    {
      type: "category",
      label: "관리자용 포커스팡",
      link: {
        type: "generated-index",
        title: "관리자용 포커스팡 가이드 목차",
      },
      items: [
        "admin-guide/feature",
        "admin-guide/login",
        "admin-guide/usage",
        "admin-guide/teacher-account-management",
        "admin-guide/admin-account-management",
      ],
    },
  ],
  // category/선생님용-포커스팡-1 오류 확인
  teacherSidebar: [
    {
      type: "category",
      label: "선생님용 포커스팡",
      link: {
        type: "generated-index",
        title: "선생님용 포커스팡 가이드 목차",
      },
      items: [
        "teacher-guide/login",
        "teacher-guide/add-class",
        "teacher-guide/student-list",
        "teacher-guide/announcement",
        "teacher-guide/delete-announcement",
        "teacher-guide/dashboard",
        "teacher-guide/focustime",
        "teacher-guide/group-activity",
        "teacher-guide/assignment",
        "teacher-guide/quizpang",
        "teacher-guide/web-app-control",
      ],
    },
  ],
  studentSidebar: [
    {
      type: "category",
      label: "학생용 포커스팡",
      link: {
        type: "generated-index",
        title: "학생용 포커스팡 가이드 목차",
      },
      items: [
        "student-guide/android-install-guide",
        "student-guide/android-setup",
        "student-guide/window-install",
        "student-guide/window-setup",
        "student-guide/chromebook-install",
        "student-guide/login",
        "student-guide/add-class",
        "student-guide/display-in-class",
        "student-guide/web-app-control",
        "student-guide/announcement",
        "student-guide/assignment",
        "student-guide/group-activity",
      ],
    },
  ],
};

export default sidebars;
