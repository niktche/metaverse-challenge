import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  const appID = process.env.NEXT_PUBLIC_APP_ID;
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

  return (
    <MoralisProvider appId={appID} serverUrl={serverURL}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
