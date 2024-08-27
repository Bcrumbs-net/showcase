/**
 *
 * @param targetDomain
 * @returns The corret domain for the template in case of local development
 * Supported templates domains as next:
 * - showcase-app.bcrumbs.net
 * - showcase-agency.bcrumbs.net
 * - showcase-saas.bcrumbs.net
 * - showcase-saas2.bcrumbs.net
 * - showcase-saas3.bcrumbs.net
 * - showcase-crypto.bcrumbs.net
 * - showcase-crypto2.bcrumbs.net
 * - showcase-charity.bcrumbs.net
 * - showcase-hosting.bcrumbs.net
 * - showcase-ride.bcrumbs.net
 * - showcase-food.bcrumbs.net
 * - showcase-portfolio.bcrumbs.net
 *
 */
export function checkIfKnownDomain(targetDomain: string) {
  if (
    !targetDomain ||
    targetDomain.indexOf("localhost") >= 0 ||
    targetDomain.indexOf("bc-showcase") >= 0 ||
    targetDomain.indexOf("test.bcrumbs.net") >= 0 ||
    targetDomain.indexOf("test-showcase.bcrumbs.net") >= 0
  ) {
    return "showcase-agency.bcrumbs.net";
  }

  return targetDomain;
}
