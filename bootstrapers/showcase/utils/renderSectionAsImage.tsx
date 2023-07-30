const UserID = process.env.HtmlcsstoimageID;
const ApiKey = process.env.HtmlcsstoimageKey;

export async function renderSectionAsImage({
  sectionId,
  templateId,
  templateContextId,
  companyId,
}: {
  sectionId: number;
  templateId: number;
  templateContextId: number;
  companyId: number;
}) {
  const result = await fetch('https://hcti.io/v1/image', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa(`${UserID}:${ApiKey}`),
    },
    body: new URLSearchParams({
      url: `https://test-showcase.bcrumbs.net/_section?sectionId=${sectionId}&templateId=${templateId}&templateContextId=${templateContextId}&companyId=${companyId}`,
    }),
  });

  return (await result.json()).url;
}
