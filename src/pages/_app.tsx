import { useEffect } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from '../store';
import '../styles/main.css';
import Alerts from '@/components/Alerts';
import SharedLayouts from '@/layout/SharedLayouts';
import { LayoutType } from '@/types';

const client = new QueryClient();
const persistor = persistStore(store);

type NextPageWithLayout = NextPage & {
  layout?: LayoutType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { pathname } = useRouter();
  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');

    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <QueryClientProvider client={client}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Alerts />
          <SharedLayouts type={Component.layout || 'public'}>
            <Component {...pageProps} />
          </SharedLayouts>
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
