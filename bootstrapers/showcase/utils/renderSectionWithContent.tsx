import { GraphContent } from '@bcrumbs.net/bc-api';

export function RenderSectionWithContent({
  contents,
  contentId,
  isAR,
  Section,
}: {
  contents: GraphContent[];
  contentId: number;
  isAR?: boolean;
  Section: React.FunctionComponent<any>;
}) {
  const targetContent = contents.find((c) => c.id === contentId);

  if (targetContent) {
    return (
      <Section
        key={`BCComponent${contentId}`}
        isAR={isAR}
        model={targetContent}
      />
    );
  }

  return <span>Target content either removed or could not be found.</span>;
}
