import 'src/styles/index.scss';
import type { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyleProvider>
      <ThemePicker variant='light'>
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
};

export default App;
