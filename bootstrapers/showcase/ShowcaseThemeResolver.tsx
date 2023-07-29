import { Config, GraphContent } from '@bcrumbs.net/bc-api';
import {
  AgencyTheme,
  CryptoTheme,
  SaaSTheme,
  SaaS2Theme,
  PortfolioTheme,
  AppTheme,
  FoodTheme,
  CharityTheme,
  RideTheme,
} from './templates';

export const ShowcaseThemeResolver = (props: {
  config: Config;
  path: string;
  templateId: number;
  data: GraphContent[];
}) => {
  switch (props.templateId) {
    case 1:
      return <AgencyTheme {...props} />;
    case 2:
      return <CharityTheme {...props} />;
    case 7:
      return <AppTheme {...props} />;
    case 9:
      return <CryptoTheme {...props} />;
    case 10:
      return <SaaS2Theme {...props} />;
    case 11:
      return <PortfolioTheme {...props} />;
    case 3:
      return <SaaSTheme {...props} />;
    case 13:
      return <FoodTheme {...props} />;
    // case 15:
    //   return <CrytptoModern config={config} path={path} />;
    case 12:
      return <RideTheme {...props} />;
    default:
      return (
        <div>Website template not found, please check your configurations.</div>
      );
  }
};
