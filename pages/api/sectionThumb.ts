import { renderSectionAsImage } from '../../bootstrapers/showcase/utils';

export default async function handler({ query }, res) {
  if (
    !query.sectionId ||
    !query.templateId ||
    !query.templateContextId ||
    !query.companyId
  ) {
    res.status(404).json({ text: 'Section not found!' });
  }

  const url = await renderSectionAsImage({
    sectionId: query.sectionId,
    templateId: query.templateId,
    templateContextId: query.templateContextId,
    companyId: query.companyId,
  });

  res.status(200).json({ text: url });
}
