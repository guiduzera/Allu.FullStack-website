import theme from '@/styles/theme'
import GlobalStyles from '@/styles/global'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
