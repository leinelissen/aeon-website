// import App from "next/app";
import Menu from 'components/Menu';
import type { AppProps /*, AppContext */ } from 'next/app'
import styled from 'styled-components';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import 'styles/global.css';
import 'fontsource-ibm-plex-sans/latin-400.css';
import 'fontsource-ibm-plex-sans/latin-600.css';
import 'fontsource-inter/latin-700.css';
import Footer from 'components/Footer';

const PageContainer = styled.div`
    min-height: 100vh;
    padding-bottom: 150px;
    position: relative;
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Aeon - Get a grip on your data</title>
                <meta name="description" content="Aeon is an app that retrieves your personal data from organizations and the internet, using the power of the GDPR"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0000ff" />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <PageContainer>
                <Menu />
                <Component {...pageProps} />
                <Footer />
            </PageContainer>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
