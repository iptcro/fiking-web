import type { AppProps } from "next/app";
import Head from "next/head";

const SITE_NAME = "IPT Hrvatska";

const PAGE_TITLES: Record<string, string> = {
  "/home": "Fiking",
  "/about": "About",
  "/support": "Support",
  "/conference": "Conference",
  "/integration_bee": "Integrijada",
};

export default function App({ Component, pageProps, router }: AppProps) {
  const pageTitle = PAGE_TITLES[router.pathname];

  return (
    <>
      <Head>
        <title>{pageTitle ? `${SITE_NAME} | ${pageTitle}` : SITE_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
