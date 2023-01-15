import "../styles/globals.css";
import Layout from "../components/Layout"
import {AppProvider}  from "../context/appContext"


// THIS IS JUST COMMITED BY THIS TIME

// This is another commit i have made

// This is it
function MyApp({ Component, pageProps }) {
  return (
     <AppProvider>
    <Layout>
        <Component {...pageProps} />
     </Layout>
    </AppProvider>
  );
}

export default MyApp;
