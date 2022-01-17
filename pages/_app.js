import { Global } from '@emotion/react';
import Head from 'next/head';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { extendTheme } from '@chakra-ui/react';
// import '@fontsource/inter/500.css';

export const theme = extendTheme({
    styles: {
        global: {
            body: { bg: '#FDFAF3' },
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
            </Head>
            <ChakraProvider theme={theme}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
