import React, { Fragment } from 'react';
import { AppProps } from 'next/app';
import { ApolloClient } from '@apollo/client';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import '../public/assets/css/flaticon.css';
import { ApolloProvider } from '@apollo/client';
import { withShowcaseClient } from '@bcrumbs.net/bc-api';

function BCShowcase({
  Component,
  pageProps,
  apollo,
}: AppProps & { apollo: ApolloClient<any> }) {
  return (
    <ApolloProvider client={apollo}>
      <Fragment>
        <Modal />
        <Component {...pageProps} />
      </Fragment>
    </ApolloProvider>
  );
}

BCShowcase.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

// @ts-expect-error TypeScript is complaining
export default withShowcaseClient(BCShowcase);
