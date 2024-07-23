import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { foodTheme } from './themeStyles';
import { ResetCSS } from '../shared/styles/reset';
import { GlobalStyle, ContentWrapper } from './globalStyle';
import ComponentResolver from '../../mappers';
import BCLink from '../shared/components/BCLink';
import { Config, GraphContent } from '@bcrumbs.net/bc-api';
import WhatsAppLink from '../shared/components/WhatsAppLink';
import { filterData } from '../../utils/filterData';
import { convertDataModelToDataObject } from '../../utils/withModelToDataObjProp';

export const FoodTheme = ({
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
  const rootModelData = convertDataModelToDataObject(data) as Record<
    string,
    string
  >;

  const filteredData = filterData(data.children, config);

  const isAR = config.lang === 'AR';

  return (
    <>
      {/*@ts-ignore: Unreachable code error*/}
      <ThemeProvider theme={foodTheme(rootModelData)}>
        <Fragment>
          {/* Start agency head section */}
          <Head>
            <title>{data.title}</title>
            <meta name="Description" content={data.metaDescription} />
            <meta name="theme-color" content="#10ac84" />
            {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
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
            {rootModelData.facebookAppId ? (
              <>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `window.fbAsyncInit = function() {
                    FB.init({
                      appId            : ${rootModelData.facebookAppId},
                      xfbml            : true,
                      version          : 'v20.0'
                    });
                  };`,
                  }}
                />

                <script
                  async
                  defer
                  crossOrigin="anonymous"
                  src={`https://connect.facebook.net/en_US/sdk.js`}
                  nonce="d5wHYRBY"
                ></script>
              </>
            ) : null}
          </Head>
          {/*@ts-ignore: Unreachable code error*/}
          <ResetCSS />
          {/*@ts-ignore: Unreachable code error*/}
          <GlobalStyle />
          {/* End of agency head section */}
          {/* Start agency wrapper section */}
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
          {/* End of agency wrapper section */}
        </Fragment>
      </ThemeProvider>
    </>
  );
};
