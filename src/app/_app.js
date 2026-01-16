import Head from "next/head";
import "@/styles/globals.css"; // Ensure your global CSS is loaded

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Preconnecting and loading Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&family=Smooch+Sans:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Adding Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
