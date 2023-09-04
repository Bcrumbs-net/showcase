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

    if (targetPageArr && targetPageArr.length > 0) {
      subConfig = targetPageArr[0];
      if(subConfig){
        templateId = subConfig.templateId;
        config.lang = subConfig.lang;
      } else {
        return <div>404 Page not found...</div>;
      }
    } else {
      return <div>404 Page not found...</div>;
    }
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
