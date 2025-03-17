import React from "react";
import Layout from "@theme-original/Layout";
import type { Props } from "@theme/Layout";

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NHH2X5G6"
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <Layout {...props} />
    </>
  );
}
