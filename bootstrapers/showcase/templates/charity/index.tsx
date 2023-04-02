/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from './themeStyles';
import { ResetCSS } from '../../assets/css/style';
import { GlobalStyle, CharityWrapper, ContentWrapper } from './globalStyle';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';

export const CharityTheme = ({
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
      <ThemeProvider theme={charityTheme(rootModelData)}>
        <Fragment>
          {/* Start charity head section */}
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            {/* Load google fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
              rel="stylesheet"
            />
          </Head>
          {/*@ts-ignore: Unreachable code error*/}
          <ResetCSS />
          {/*@ts-ignore: Unreachable code error*/}
          <GlobalStyle />
          {/* End of charity head section */}
          {/* Start charity wrapper section */}
          <CharityWrapper>
            <ContentWrapper>
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
            </ContentWrapper>
            <BCLink />
          </CharityWrapper>
          {/* End of charity wrapper section */}
        </Fragment>
      </ThemeProvider>
    </>
  );
};
