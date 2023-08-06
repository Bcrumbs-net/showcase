const UserID = process.env.HtmlcsstoimageID;
const ApiKey = process.env.HtmlcsstoimageKey;

export async function renderSectionAsImage({
  sectionId,
  templateId,
  templateContextId,
}: {
  sectionId: number;
  templateId: number;
  templateContextId: number;
}) {
  const result = await fetch('https://hcti.io/v1/image', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${UserID}:${ApiKey}`).toString('base64'),
    },
    body: new URLSearchParams({
      url: `https://test-showcase.bcrumbs.net/_section?sectionId=${sectionId}&templateId=${templateId}&templateContextId=${templateContextId}`,
    }),
  });

  return (await result.json()).url;
}
