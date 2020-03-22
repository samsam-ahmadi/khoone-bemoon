import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  pageUrl: string;
}

export default function MetaTags({
  title,
  description,
  pageUrl,
}: Props): ReactElement {
  return (
    <Head>
      <title>{`#خونه_بمون |  ${title}`}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.png" type="image/icon" />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={pageUrl} />
      <link rel="manifest" href="manifest.json" />
      <meta name="keywords" content={description} />

      <meta name="msapplication-TileColor" content="#17C37B" />
      <meta name="theme-color" content="#17C37B" />
    </Head>
  );
}
