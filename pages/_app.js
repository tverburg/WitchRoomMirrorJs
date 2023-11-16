import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { MirrorProvider } from '../contexts/MirrorContext'


export default function MyApp({ Component, pageProps }) {
    if (Component.getLayout) {
        return (
            <MirrorProvider>
                <LayoutProvider>
                    {Component.getLayout(<Component {...pageProps} />)}
                </LayoutProvider>
            </MirrorProvider>
        )
    } else {
        return (
            <MirrorProvider>
                <LayoutProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </LayoutProvider>
            </MirrorProvider>
        );
    }
}
