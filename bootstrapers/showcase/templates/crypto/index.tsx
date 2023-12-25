/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from './themeStyles';
import { ResetCSS } from '../../assets/css/style';
import { GlobalStyle, ContentWrapper } from './globalStyle';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';
import { Config, GraphContent } from '@bcrumbs.net/bc-api';
import WhatsAppLink from '../shared/components/WhatsAppLink';

export const CryptoTheme = ({
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
      <ThemeProvider theme={cryptoTheme}>
        <Fragment>
          <Head>
            <title>{data.title}</title>
            <meta name="Description" content={data.metaDescription} />
            <meta name="theme-color" content={rootModelData.primary} />
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
            {/* Load google fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
              rel="stylesheet"
            />
          </Head>
          {/*@ts-ignore: Unreachable code error*/}
          <ResetCSS />
          {/*@ts-ignore: Unreachable code error*/}
          <GlobalStyle />
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
            <BCLink />
            {rootModelData.whatsappPhone ? (
              <WhatsAppLink phoneNumber={`https://wa.me/${rootModelData.whatsappPhone}`} />
            ) : null}
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    </>
  );
};
