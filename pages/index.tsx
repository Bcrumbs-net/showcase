import {
  showcaseConfig,
  showcaseClient,
  showcaseContentsQuery,
  GraphContent,
  Config,
} from '@bcrumbs.net/bc-api';
import ShowcaseBootstrapper from '../bootstrapers/showcase';
import {
  checkIfKnownDomain,
  logWebsiteVisit,
  fetchWebsiteConfig,
  fetchWebsiteContents,
} from '../bootstrapers/showcase/utils';

export async function getServerSideProps({ req, query }) {
  // Fetching configuration
  const domain = req.headers['host'];
  const targetDomain = checkIfKnownDomain(domain);
  const path = query.path;
  // Logging the visit
  logWebsiteVisit(domain);
  // Getting needed data
  const config = await fetchWebsiteConfig(targetDomain);
  const contents = await fetchWebsiteContents(config, path);
  return {
    props: {
      config,
      data: contents,
    },
  };
}

export const TemplateRouter = ({
  config,
  data,
  query,
}: {
  config: Config;
  query: {
    path: string;
    path2: string;
  };
  data: GraphContent[];
}) => {
  let path;

  if (query?.path) {
    path = `/${query.path}`;
  }

  if (query?.path2) {
    path += `/${query.path2}`;
  }

  return <ShowcaseBootstrapper config={config} path={path} data={data} />;
};

export default TemplateRouter;
