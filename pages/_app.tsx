import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvider } from 'stores/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps} initalState={pageProps.hydrationData}>
      <Component {...pageProps} /> 
    </StoreProvider>
  )
}
