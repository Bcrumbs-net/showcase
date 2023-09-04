import { showcaseClient, showcaseTemplateSectionsThumbsMap } from "@bcrumbs.net/bc-api";

/**
 *
 * @param companyContextId
 *
 */
export async function fetchTemplateSectionsThumbsMap(companyContextId: number) {
  const configResponse = await showcaseClient.query({
    query: showcaseTemplateSectionsThumbsMap,
    variables: { companyContextId },
  });
  
  return JSON.parse(configResponse.data.configuration) as Record<string,string>;
}
