import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// 기본 사이드바 정의
const sidebars: SidebarsConfig = {
  elementarySidebar: [
    {
      type: "doc",
      id: "elementary/intro",
      label: "초등학교 포커스팡 가이드",
      className: "sidebar-intro",
    },
    {
      type: "category",
      label: "관리자",
      link: {
        type: "generated-index",
        title: "관리자용 포커스팡 가이드 목차",
        slug: "elementary/admin-guide",
      },
      // 접기
      collapsed: true,
      items: [
        "elementary/admin-guide/feature",
        "elementary/admin-guide/login",
        "elementary/admin-guide/usage",
        "elementary/admin-guide/teacher-account-management",
        "elementary/admin-guide/admin-account-management",
      ],
    },
    {
      type: "category",
      label: "선생님",
      link: {
        type: "generated-index",
        title: "초등학교 선생님용 포커스팡 가이드 목차",
        slug: "elementary/teacher-guide",
      },
      collapsed: true,
      items: [
        "elementary/teacher-guide/login",
        "elementary/teacher-guide/add-class",
        "elementary/teacher-guide/add-course",
        "elementary/teacher-guide/announcement",
        "elementary/teacher-guide/focustime",
        "elementary/teacher-guide/quizpang",
        "elementary/teacher-guide/assignment",
        "elementary/teacher-guide/manage-student",
        "elementary/teacher-guide/group-activity",
        {
          type: "category",
          label: "10. 정보 변경",
          collapsed: false,
          link: {
            type: "doc",
            id: "elementary/teacher-guide/settings",
          },
          items: ["elementary/teacher-guide/settings-change-role"],
        },
        "elementary/teacher-guide/logout",
      ],
    },
    {
      type: "category",
      label: "학생",
      link: {
        type: "generated-index",
        title: "초등학교 학생용 포커스팡 가이드 목차",
        slug: "elementary/student-guide",
      },
      collapsed: true,
      items: [
        "elementary/student-guide/android-install",
        "elementary/student-guide/ipad-install",
        "elementary/student-guide/window-install",
        "elementary/student-guide/chromebook-install",
        "elementary/student-guide/login",
        "elementary/student-guide/add-course",
        "elementary/student-guide/announcement",
        "elementary/student-guide/assignment",
        "elementary/student-guide/focustime",
        "elementary/student-guide/quizpang",
        "elementary/student-guide/group-activity",
        "elementary/student-guide/logout",
      ],
    },
  ],
  middlehighSidebar: [
    {
      type: "doc",
      id: "middlehigh/intro",
      label: "중고등학교 포커스팡 가이드",
      className: "sidebar-intro",
    },
    {
      type: "category",
      label: "관리자",
      link: {
        type: "generated-index",
        title: "관리자용 포커스팡 가이드 목차",
        slug: "middlehigh/admin-guide",
      },
      items: [
        "middlehigh/admin-guide/feature",
        "middlehigh/admin-guide/login",
        "middlehigh/admin-guide/usage",
        "middlehigh/admin-guide/teacher-account-management",
        "middlehigh/admin-guide/admin-account-management",
      ],
    },
    {
      type: "category",
      label: "선생님",
      link: {
        type: "generated-index",
        title: `중고등학교 선생님용 포커스팡 가이드 목차`,
        slug: "middlehigh/teacher-guide",
      },
      collapsed: true,
      items: [
        "middlehigh/teacher-guide/login",
        "middlehigh/teacher-guide/add-course",
        "middlehigh/teacher-guide/announcement",
        "middlehigh/teacher-guide/focustime",
        "middlehigh/teacher-guide/quizpang",
        "middlehigh/teacher-guide/assignment",
        "middlehigh/teacher-guide/dashboard",
        "middlehigh/teacher-guide/manage-student",
        "middlehigh/teacher-guide/group-activity",
        "middlehigh/teacher-guide/settings",
        "middlehigh/teacher-guide/logout",
      ],
    },
    {
      type: "category",
      label: "학생",
      link: {
        type: "generated-index",
        title: "중고등학교 학생용 포커스팡 가이드 목차",
        slug: "middlehigh/student-guide",
      },
      collapsed: true,
      items: [
        "middlehigh/student-guide/android-install",
        "middlehigh/student-guide/ipad-install",
        "middlehigh/student-guide/window-install",
        "middlehigh/student-guide/chromebook-install",
        "middlehigh/student-guide/login",
        "middlehigh/student-guide/add-course",
        "middlehigh/student-guide/announcement",
        "middlehigh/student-guide/assignment",
        "middlehigh/student-guide/focustime",
        "middlehigh/student-guide/quizpang",
        "middlehigh/student-guide/group-activity",
        "middlehigh/student-guide/logout",
      ],
    },
  ],
};

export default sidebars;
