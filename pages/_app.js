import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-b min-h-screen from-orange-400 to-orange-600 p-4">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-2566390247263128"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
