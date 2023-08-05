import "../styles/globals.css";
import { ApolloWrapper } from "../lib/apollo-provider";

function MyApp({ Component, pageProps }) {

  console.log(pageProps, 'pageProps');

  return (
    <ApolloWrapper>
      <Component {...pageProps} />
    </ApolloWrapper>
  );
}

export default MyApp;
