import { useShowcaseConfig } from '@bcrumbs.net/bc-api';
import ShowcaseBootstrapper from '../bootstrapers/showcase';
import { checkIfKnownDomain } from '../utils/checkIfKnownDomain';

export const TemplateRouter = props => {
  let path;

  if (props.query?.path) {
    path = `/${props.query.path}`;
  }

  if (props.query?.path2) {
    path += `/${props.query.path2}`;
  }

  const targetDomain = checkIfKnownDomain(props.domain);

  try {
    const configResult = useShowcaseConfig(targetDomain);

    if (configResult.loading) {
      return <div>Loading ... </div>;
    }

    if (configResult.error) {
      return (
        <div>Error loading configuration: {configResult.error.message}</div>
      );
    }

    const config = JSON.parse(configResult.data.configuration);

    return <ShowcaseBootstrapper config={config} path={path} />;
  } catch (ex) {
    return <div>Error: {ex.message}</div>;
  }
}

export default TemplateRouter;
