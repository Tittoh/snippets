import "@code-hike/mdx/dist/index.css"
import '../styles/global.css';
import '../styles/mandala.css';
import "../styles/ch-styles.css";
import "../styles/state-machine.css";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
