import theme from '@/styles/theme'
import GlobalStyles from '@/styles/global'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import CartContext from '@/context/cartContext';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [research, setResearch] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <CartContext.Provider value={[research, setResearch]}>
        <Cart />
        <Component {...pageProps} />
        <Footer />
      </CartContext.Provider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
