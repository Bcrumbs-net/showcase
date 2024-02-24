import { Config, GraphContent } from '@bcrumbs.net/bc-api';

export const filterData = (data: GraphContent[], config: Config) => {
    return data.filter((child: any) => {
        if (config?.headerID && child.id === config?.headerID) {
            return false;
        }
        if (config?.footerID && child.id === config?.footerID) {
            return false;
        }
        return true;
    });
};