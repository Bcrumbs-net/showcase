/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './themeStyles';
import { GlobalStyle, AppWrapper, ConditionWrapper } from './globalStyle';
import { ResetCSS } from '../../assets/css/style';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';
import { Config, GraphContent } from '@bcrumbs.net/bc-api';

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
      <ThemeProvider theme={appTheme}>
        <>
          <Head>
            <title>{rootModelData.title}</title>
            <meta name="Description" content={data.metaDescription} />
            <meta name="theme-color" content={rootModelData.primary} />
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
          </AppWrapper>
        </>
      </ThemeProvider>
    </>
  );
};
