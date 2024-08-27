import dynamic from 'next/dynamic';
import { Box } from '../../../../../../lib/atoms';

const FBPageScript = ({ data }: { data: Record<string, string> }) => (
  <Box width="100%">
    <Box
      className="fb-page"
      data-href={data.pageUrl}
      data-tabs="timeline"
      data-height="600"
      data-width="420"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote cite={data.pageUrl} className="fb-xfbml-parse-ignore">
        <a href={data.pageUrl}>{data.widgetTitle}</a>
      </blockquote>
    </Box>
  </Box>
);


export default dynamic(() => Promise.resolve(FBPageScript), {
  ssr: false,
});
