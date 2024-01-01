import { Config, GraphContent } from '@bcrumbs.net/bc-api';
import { ShowcaseThemeResolver } from './ShowcaseThemeResolver';

const ShowcaseBootstraper = ({
  config,
  path,
  data,
}: {
  config: Config;
  path: string;
  data: GraphContent[];
}) => {
  let subConfig;
  let templateId = config?.templateId;

  if (path && config.pages) {
    const targetPageArr = config.pages.filter(
      (m) => m.path.toLowerCase() == path.toLowerCase()
    );

    subConfig = targetPageArr[0];
    templateId = subConfig.templateId;
    config.lang = subConfig.lang;
  }

  if (config?.root) {
    return (
      <ShowcaseThemeResolver
        config={config}
        path={path}
        templateId={templateId}
        data={data}
      />
    );
  } else {
    return <div>Invalid configurations</div>;
  }
};

export default ShowcaseBootstraper;
