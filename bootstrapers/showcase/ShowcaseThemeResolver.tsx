import { AgencyTheme } from '../../lib';
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

export const ShowcaseThemeResolver = ({
  templateId,
  config,
  path,
  data,
}: {
  config: any;
  path: string;
  templateId: number;
  data: any;
}) => {
  switch (templateId) {
    case 1:
      return (
        <AgencyTheme
          config={config}
          path={path}
          data={data}
          templateId={templateId}
        />
      );
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
