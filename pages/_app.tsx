import React, { Fragment } from 'react';
import { AppProps } from 'next/app';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { withShowcaseClient } from '@bcrumbs.net/bc-api';
import { Modal } from '@redq/reuse-modal';
import { datadogRum } from '@datadog/browser-rum';
import '@redq/reuse-modal/es/index.css';
import '../public/assets/css/flatIcon/flaticon.css';
import '../public/assets/css/fontAwesome/font-awesome.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-gallery/styles/css/image-gallery.css';

datadogRum.init({
  applicationId: 'c9934a80-e82c-4c71-9b7c-e07f3fc99f3d',
  clientToken: 'pub6d2464b7728cc9fd5ef1b0245ded16eb',
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: 'datadoghq.com',
  service: 'showcase',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

function BCShowcase({
  Component,
  pageProps,
  apollo,
}: AppProps & { apollo: ApolloClient<any> }) {
  const AnyComponent = Component as any;

  return (
    <ApolloProvider client={apollo}>
      <>
        <AnyComponent {...pageProps} />
        <Modal />
      </>
    </ApolloProvider>
  );
}

BCShowcase.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

// @ts-ignore TypeScript is complaining
export default withShowcaseClient(BCShowcase);
