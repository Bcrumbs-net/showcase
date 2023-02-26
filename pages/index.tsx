import { showcaseConfig, showcaseClient, showcaseContentsQuery } from '@bcrumbs.net/bc-api';
import ShowcaseBootstrapper from '../bootstrapers/showcase';
import { checkIfKnownDomain } from '../utils/checkIfKnownDomain';

export async function getServerSideProps({ req, query }) {
  // Fetching configuration
  const domain = req.headers['host'];
  const targetDomain = checkIfKnownDomain(domain);
  const path = query.path;
  const configResponse = await showcaseClient.query({
    query: showcaseConfig,
    variables: { domain: ';' + targetDomain + ';' },
  });
  const config = JSON.parse(configResponse.data.configuration);

  // Fetching data
  const dataResponse = await showcaseClient.query({
    query: showcaseContentsQuery,
    variables: {
      rootId: config.root,
      deep: config.deep || 3,
      path,
    },
  });

  return {
    props: {
      config,
      data: dataResponse.data?.contents
    },
  };
}

export const TemplateRouter = ({ config, data, query }) => {
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
