import type { AppProps } from 'next/app';
import '../src/globals.css'; // Adjust path if needed
import Nav from '@/Components/Nav';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav/>
      <Component {...pageProps} />
    </>
  );
}