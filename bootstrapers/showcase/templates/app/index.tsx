/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './themeStyles';
import { GlobalStyle, AppWrapper, ConditionWrapper } from './globalStyle';
import { ResetCSS } from '../shared/styles/reset';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';
import { Config, GraphContent } from '@bcrumbs.net/bc-api';
import WhatsAppLink from '../shared/components/WhatsAppLink';
import { convertDataModelToDataObject } from '../../utils/withModelToDataObjProp';
import { filterData } from '../../utils/filterData';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export const AppTheme = ({
  templateId,
  config,
  path,
  data: queryData,
  footer,
  header,
}: {
  config: Config;
  path: string;
  templateId: number;
  data: GraphContent[];
  footer?: GraphContent;
  header?: GraphContent;
}) => {
  const data = queryData[0];
  const rootModelData: Record<string, string> = convertDataModelToDataObject(data);

  const filteredData = filterData(data.children, config);

  const isAR = config.lang === 'AR';


  return (
    <>
      {/*@ts-ignore: Unreachable code error*/}
      <ThemeProvider theme={appTheme}>
        <>
          <Head>
            <title>{rootModelData.title}</title>
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
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
              rel="stylesheet"
            />
          </Head>
          {/*@ts-ignore: Unreachable code error*/}
          <ResetCSS />
          {/*@ts-ignore: Unreachable code error*/}
          <GlobalStyle />
          <AppWrapper>
            {header && (
              <ComponentResolver
                key={`HeaderComponent`}
                modelId={header.modelId}
                model={header}
                isAR={isAR}
              />
            )}
            {filteredData.map((model: any, index: number) => (
              <ComponentResolver
                key={`BCComponent${index}`}
                modelId={model.modelId}
                model={model}
                isAR={isAR}
              />
            ))}
            {footer && (
              <ComponentResolver
                key={`FooterComponent`}
                modelId={footer.modelId}
                model={footer}
                isAR={isAR}
              />
            )}
            <BCLink />
            {rootModelData.whatsappPhone ? (
              <WhatsAppLink phoneNumber={rootModelData.whatsappPhone} />
            ) : null}
          </AppWrapper>
        </>
      </ThemeProvider>
    </>
  );
};
