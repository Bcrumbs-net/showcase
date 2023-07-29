import { GraphContent } from '@bcrumbs.net/bc-api';
import { fetchSectionData } from '../../bootstrapers/showcase/utils';
import { ShowcaseThemeResolver } from '../../bootstrapers/showcase/ShowcaseThemeResolver';

export async function getServerSideProps({ req, query }) {
  if (!query.sectionId || !query.templateId || !query.templateContextId || !query.companyId) {
    return {
      props: {
        data: null,
      },
    };
  }

  const templateId = +query.templateId;
  const sectionId = +query.sectionId;
  const templateContextId = +query.templateContextId;
  const companyId = +query.companyId;
  const sectionData = await fetchSectionData(sectionId, companyId);

  return {
    props: {
      data: sectionData,
      templateId,
      templateContextId,
    },
  };
}

export const RenderSection = ({
  data,
  templateId,
  templateContextId,
}: {
  data: GraphContent | null;
  templateId: number;
  templateContextId: number;
}) => {
  if (!data) {
    return <div>404 section not found.</div>;
  }

  return (
    <ShowcaseThemeResolver
      config={{
        deep: 3,
        lang: null,
        templateId,
        templateContextId,
        root: 0,
        pages: null,
      }}
      path={null}
      templateId={templateId}
      data={[
        {
          children: [data],
          data: [],
          name: 'rootContent',
          id: 0,
          title: 'rootContent',
          online: true,
          metaDescription: '',
          priority: 0,
        },
      ]}
    />
  );
};

export default RenderSection;
