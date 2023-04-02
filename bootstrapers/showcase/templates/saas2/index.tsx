/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { saasClassicTheme } from './themeStyles';
import { ResetCSS } from '../../assets/css/style';
import { GlobalStyle, ContentWrapper } from './globalStyle';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';

export const SaaS2Theme = ({
  templateId,
  config,
  path,
  data: queryData,
}: {
  config: any;
  path: string;
  templateId: number;
  data: any;
}) => {
  const data = queryData[0];
  const rootModelData = data.data.reduce(function (map: any, obj: any) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  const isAR = config.lang === 'AR';

  return (
    <>
    {/*@ts-ignore: Unreachable code error*/}
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <Head>
          <title>{data.title}</title>
          <meta name="Description" content={data.metaDescription} />
          <meta name="theme-color" content={rootModelData.primary} />
          {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />*/}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={rootModelData.favicon32}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={rootModelData.favicon16}
          />
          {/*<link rel="manifest" href="/site.webmanifest"></link>*/}
          {/* Load google fonts */}
          {isAR ? (
            /*<link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap" rel="stylesheet"></link>*/
            <link
              href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
              rel="stylesheet"
            ></link>
          ) : (
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
              rel="stylesheet"
            />
          )}
        </Head>
        {/*@ts-ignore: Unreachable code error*/}
        <ResetCSS />
        {/*@ts-ignore: Unreachable code error*/}
        <GlobalStyle />
        <ContentWrapper>
          <div id="fb-root"></div>
          {data.children &&
            data.children
              .filter((m) => m.online)
              .map((model, index) => (
                <ComponentResolver
                  key={`BCComponent${index}`}
                  modelId={model.modelId}
                  model={model}
                  isAR={isAR}
                />
              ))}
          <BCLink />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
    </>
  );
};
