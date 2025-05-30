import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

import { defineCustomElements } from '../../../loader/index.cjs.js';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    defineCustomElements(window);
  }, []);

  return <Component {...pageProps} />;
}
