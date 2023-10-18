/**
 * 
 * @param targetDomain 
 * @returns The corret domain for the template in case of local development
 * Supported templates domains as next:
 * - showcase-app.bcrumbs.net
 * - showcase-agency.bcrumbs.net
 * - showcase-saas.bcrumbs.net x-style
 * - showcase-saas2.bcrumbs.net
 * - showcase-crypto.bcrumbs.net
 * - showcase-crypto2.bcrumbs.net x-template
 * - showcase-charity.bcrumbs.net
 * - showcase-hosting.bcrumbs.net x-template
 * - showcase-ride.bcrumbs.net
 * - showcase-food.bcrumbs.net
 * 
 */
export function checkIfKnownDomain(targetDomain: string) {
  if (
    !targetDomain ||
    targetDomain.indexOf('localhost') >= 0 ||
    targetDomain.indexOf('bc-showcase') >= 0 ||
    targetDomain.indexOf('test.bcrumbs.net') >= 0 ||
    targetDomain.indexOf('test-showcase.bcrumbs.net') >= 0
  ) {
    return 'showcase-saas.bcrumbs.net';
  }

  return targetDomain;
}
