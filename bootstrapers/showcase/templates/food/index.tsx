import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { foodTheme } from './themeStyles';
import { ResetCSS } from '../../assets/css/style';
import { GlobalStyle, ContentWrapper } from './globalStyle';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';
import { Config, GraphContent } from '@bcrumbs.net/bc-api';

export const FoodTheme = ({
  templateId,
  config,
  path,
  data: queryData,
}: {
  config: Config;
  path: string;
  templateId: number;
  data: GraphContent[];
}) => {
  const data = queryData[0];
  const rootModelData: Record<string, string> = data.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  const isAR = config.lang === 'AR';

  return (
    <>
      {/*@ts-ignore: Unreachable code error*/}
      <ThemeProvider theme={foodTheme(rootModelData)}>
        <Fragment>
          {/* Start agency head section */}
          <Head>
            {/*
                <title>{data.title}</title>
                <meta name="Description" content={data.metaDescription} />
                <meta name="theme-color" content="#10ac84" />
              */}
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />*/}
            {/*<link
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
              />*/}
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
            <script
              async
              defer
              crossOrigin="anonymous"
              src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=${data.facebookAppId}&autoLogAppEvents=1`}
              nonce="d5wHYRBY"
            ></script>
          </Head>
          {/*@ts-ignore: Unreachable code error*/}
          <ResetCSS />
          {/*@ts-ignore: Unreachable code error*/}
          <GlobalStyle />
          {/* End of agency head section */}
          {/* Start agency wrapper section */}
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
          {/* End of agency wrapper section */}
        </Fragment>
      </ThemeProvider>
    </>
  );
};
