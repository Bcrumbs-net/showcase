import {
  renderSectionAsImage,
  fetchTemplateSectionsThumbsMap,
  updateTemplateSectionThumbFunc,
} from '../../bootstrapers/showcase/utils';

export default async function handler({ query }, res) {
  if (!query.sectionId || !query.templateId || !query.templateContextId) {
    res.status(404).json({ text: 'Section not found!' });
  }

  try {
    const sectionsThumbMap = await fetchTemplateSectionsThumbsMap(
      +query.templateContextId
    );

    if (
      sectionsThumbMap &&
      sectionsThumbMap[query.sectionId] &&
      sectionsThumbMap[query.sectionId] != 'undefined'
    ) {
      res.status(200).json({ text: sectionsThumbMap[query.sectionId] });
    } else {
      const url = await renderSectionAsImage({
        sectionId: query.sectionId,
        templateId: query.templateId,
        templateContextId: query.templateContextId,
      });

      if (url && url !== 'undefined') {
        updateTemplateSectionThumbFunc({
          sectionId: query.sectionId,
          contextCompanyId: query.templateContextId,
          value: url,
        });
      }

      res.status(200).json({ text: url });
    }
  } catch (ex) {
    console.log(ex.message);
    res.status(400).json({ text: 'An error happened in the endpoint.' });
  }
}
