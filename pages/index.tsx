import { GraphContent, Config } from '@bcrumbs.net/bc-api';
import ShowcaseBootstrapper from '../bootstrapers/showcase';
import {
  checkIfKnownDomain,
  logWebsiteVisit,
  fetchWebsiteConfig,
  fetchWebsiteContents,
} from '../bootstrapers/showcase/utils';
import Error from './_error';

export async function getServerSideProps({ req, query }) {
  // Fetching configuration
  const domain = query.host || req.headers['host'];
  const targetDomain = checkIfKnownDomain(domain);
  const path = query.path;

  let config;
  let contents;
  let headerArr;
  let footerArr;

  try {
    // Getting needed data
    config = await fetchWebsiteConfig(targetDomain);

    // Fetching contents
    contents = await fetchWebsiteContents({ rootId: config.root, path });

    // Fetching header and footer
    if (config.headerID) {
      headerArr = await fetchWebsiteContents({ rootId: config.headerID });
    }
    if (config.footerID) {
      footerArr = await fetchWebsiteContents({ rootId: config.footerID });
    }

    // Logging the visit
    logWebsiteVisit(domain);
  } catch (ex) {
    return {
      props: {
        invalid: true,
        errorCode: ex.statusCode || null,
        error: ex.message || null,
      },
    };
  }
  if (!config) {
    return {
      props: {
        invalid: true,
      },
    };
  }
  return {
    props: {
      config,
      data: contents,
      footer: footerArr && footerArr.length > 0 ? footerArr[0] : null,
      header: headerArr && headerArr.length > 0 ? headerArr[0] : null,
      query,
    },
  };
}

export const TemplateRouter = ({
  config,
  data,
  query,
  errorCode,
  error,
  invalid,
  footer,
  header,
}: {
  errorCode?: number;
  error?: string;
  config?: Config;
  query?: {
    path: string;
    path2: string;
  };
  data?: GraphContent[];
  invalid?: boolean;
  footer?: GraphContent;
  header?: GraphContent;
}) => {
  if (invalid) {
    return <Error />;
  }

  let path;

  if (query?.path) {
    path = `/${query.path}`;
  }

  if (query?.path2) {
    path += `/${query.path2}`;
  }

  if (!config || !data) {
    return <Error />;
  }

  if (
    path &&
    (!config.pages ||
      !config.pages.some(
        (m) => m.path && m.path.toLowerCase() == path.toLowerCase()
      ))
  ) {
    return <Error />;
  }

  return (
    <ShowcaseBootstrapper
      config={config}
      path={path}
      data={data}
      footer={footer}
      header={header}
    />
  );
};

export default TemplateRouter;
