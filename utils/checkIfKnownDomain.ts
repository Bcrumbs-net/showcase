export function checkIfKnownDomain(targetDomain: string) {
  if (
    !targetDomain ||
    targetDomain.indexOf('localhost') >= 0 ||
    targetDomain.indexOf('bc-showcase') >= 0 ||
    targetDomain.indexOf('test.bcrumbs.net') >= 0 ||
    targetDomain.indexOf('test-showcase.bcrumbs.net') >= 0
  ) {
    return 'showcase-agency.bcrumbs.net';
  }

  return targetDomain;
}
