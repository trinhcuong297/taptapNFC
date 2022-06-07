import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/avatar.png"
          type="image/x-icon"
        />

        <title>{`Trinh Cuong's Contact`}</title>

        <meta name="title" content="Trinh Cuong's Contact" />
        <meta name="description" content="Trinh Cuong's Contact" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trinh Cuong's Contact" />
        <meta
          property="og:description"
          content="Trinh Cuong's Contact"
        />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Trinh Cuong's Contact" />
        <meta
          property="twitter:description"
          content="Trinh Cuong's Contact"
        />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}

export default MyApp;
