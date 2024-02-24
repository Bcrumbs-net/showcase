import {
  Config,
  showcaseClient,
  showcaseContentsQuery,
} from '@bcrumbs.net/bc-api';

interface FetchWebsiteContentsParams {
  rootId: string;
  deep?: number;
  path: string;
}
/**
 *
 * @param targetDomain
 *
 */
export async function fetchWebsiteContents({ rootId, deep , path }: FetchWebsiteContentsParams){
  const dataResponse = await showcaseClient.query({
    query: showcaseContentsQuery,
    variables: {
      rootId,
      deep: deep || 3,
      path,
    },
    fetchPolicy: 'no-cache'
  });

  if (dataResponse && dataResponse.data) {
    return dataResponse.data.contents;
  }

  return null;
}
