/* eslint-disable no-unused-vars */
import React, { ReactElement, ReactNode } from 'react';

import '../styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '@arcgis/core/assets/esri/themes/light/main.css';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
