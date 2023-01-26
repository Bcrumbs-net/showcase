import { useQuery } from '@apollo/client';
import { showcaseContentsQuery } from '@bcrumbs.net/bc-api';
import { AgencyTheme } from '@bc-mono/showcase-organisms';

// import Agency from '../themes/agency';
// import Crypto from '../themes/_crypto';
// import SaaSClassic from '../themes/_saasclassic';
// import SaaS2 from '../themes/_saas.js.disable';
// import Portfolio from '../themes/_portfolio';
// import App from '../themes/_app.js.disable';
// import Food from '../themes/_food';
// import CrytptoModern from '../themes/_cryptomodern.js.disable';
// import Charity from '../themes/_charity';
// import Ride from '../themes/_ride';

const ShowcaseBootstraper = ({
  config,
  path,
}: {
  config: any;
  path: string;
}) => {
  let subConfig;
  let templateId = config.templateId;

  if (path && config.pages) {
    const targetPageArr = config.pages.filter(
      (m) => m.path.toLowerCase() == path.toLowerCase()
    );

    if (targetPageArr && targetPageArr.length > 0) {
      subConfig = targetPageArr[0];
      templateId = subConfig.templateId;
      config.lang = subConfig.lang;
    } else {
      return <div>404 Page not found...</div>;
    }
  }

  return (
    <ShowcaseDataFetcher config={config} path={path} templateId={templateId} />
  );
};

const ShowcaseDataFetcher = ({
  templateId,
  config,
  path,
}: {
  config: any;
  path: string;
  templateId: number;
}) => {
  const queryResult = useQuery(showcaseContentsQuery, {
    variables: {
      rootId: config.root,
      deep: config.deep,
      path,
    },
  });

  if (queryResult.loading) {
    return <div>Loading ... </div>;
  }

  if (queryResult.error) {
    return <div>Error loading data: {queryResult.error.message}</div>;
  }

  if (
    queryResult.data &&
    queryResult.data.contents &&
    queryResult.data.contents.length > 0
  ) {
    return (
      <ShowcaseThemeResolver
        config={config}
        path={path}
        templateId={templateId}
        data={queryResult.data}
      />
    );
  } else {
    return <div>No data found</div>;
  }
};

const ShowcaseThemeResolver = ({
  templateId,
  config,
  path,
  data
}: {
  config: any;
  path: string;
  templateId: number;
  data: any;
}) => {
  switch (templateId) {
    case 1:
      return <AgencyTheme config={config} path={path} data={data} templateId={templateId}/>;
    // case 2:
    //   return <Charity config={config} path={path} />;
    // case 7:
    //   return <App config={config} path={path} />;
    // case 9:
    //   return <Crypto config={config} path={path} />;
    // case 10:
    //   return <SaaSClassic config={config} path={path} />;
    // case 11:
    //   return <Portfolio config={config} path={path} />;
    // case 3:
    //   return <SaaS2 config={config} path={path} />;
    // case 13:
    //   return <Food config={config} path={path} />;
    // case 15:
    //   return <CrytptoModern config={config} path={path} />;
    // case 12:
    //   return <Ride config={config} path={path} />;
    default:
      return (
        <div>Website template not found, please check your configurations.</div>
      );
  }
};

export default ShowcaseBootstraper;
