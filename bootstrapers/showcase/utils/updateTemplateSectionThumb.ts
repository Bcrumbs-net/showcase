export async function updateTemplateSectionThumbFunc({
  sectionId,
  contextCompanyId,
  value,
}: {
  sectionId: number;
  contextCompanyId: number;
  value: string;
}) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  };
  await fetch(`https://query.bcrumbs.net/api/Values/updateSectionThumbWithSpecialToken?sectionId=${sectionId}&contextCompanyId=${contextCompanyId}&value=${value}&token=3de1e3c6-4b44-42de-b065-14308236b96c`, requestOptions);
}
