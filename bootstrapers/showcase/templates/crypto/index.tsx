/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from './themeStyles';
import { ResetCSS } from '../shared/styles/reset';
import { GlobalStyle, ContentWrapper } from './globalStyle';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';
import { Config, GraphContent } from '@bcrumbs.net/bc-api';
import WhatsAppLink from '../shared/components/WhatsAppLink';
import { convertDataModelToDataObject } from '../../utils/withModelToDataObjProp';
import { filterData } from '../../utils/filterData';

export const CryptoTheme = ({
  templateId,
  config,
  path,
  data: queryData,
  header,
  footer,
}: {
  config: Config;
  path: string;
  templateId: number;
  data: GraphContent[];
  header?: GraphContent;
  footer?: GraphContent;
}) => {
  const data = queryData[0];
  const rootModelData = convertDataModelToDataObject(data) as Record<
    string,
    string
  >;

  const filteredData = filterData(data.children, config);

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
            {header && header.modelId ? (
              <ComponentResolver
                key={`HeaderComponent`}
                modelId={header.modelId}
                model={header}
                isAR={isAR}
              />
            ) : undefined}
            {filteredData?.map((model: any, index: number) => (
              <ComponentResolver
                key={`BCComponent${index}`}
                modelId={model.modelId}
                model={model}
                isAR={isAR}
              />
            ))}
            {footer && footer.modelId ? (
              <ComponentResolver
                key={`FooterComponent`}
                modelId={footer.modelId}
                model={footer}
                isAR={isAR}
              />
            ) : undefined}
            {config.whitlabel ? null : <BCLink />}
            {rootModelData.whatsappPhone ? (
              <WhatsAppLink phoneNumber={rootModelData.whatsappPhone} />
            ) : null}
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    </>
  );
};
