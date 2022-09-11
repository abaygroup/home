import '../sass/base.scss';
import NextNprogress from 'nextjs-progressbar';
import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import Alert from '../components/Alert';


const Home = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  
  return (
    <Provider store={store}>
      <NextNprogress
        color="#08c557"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Alert />
    </Provider>
  )
}

export default Home;
