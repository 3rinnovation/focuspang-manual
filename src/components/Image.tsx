import React from "react";
import clsx from "clsx"; // 클래스를 쉽게 조합하기 위해 clsx를 임포트
import styles from "./Image.module.css"; // 방금 만든 CSS Module을 임포트

export default function Image({ src, alt, size = "md", caption }) {
  // size prop 값('lg', 'md', 'sm')에 따라 해당 CSS 클래스 이름(styles.lg, styles.md, styles.sm)을 매핑합니다.
  const sizeClassName = styles[size];

  return (
    <figure className={clsx(styles.container, sizeClassName)}>
      <img
        className={styles.image}
        src={src}
        alt={alt ?? caption} // alt가 없으면 caption을 alt 텍스트로 사용
      />
      {/* caption이 존재할 경우에만 캡션 요소를 렌더링합니다. */}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
