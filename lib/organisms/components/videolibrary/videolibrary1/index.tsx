import { useState } from 'react';
import { GraphContent } from '@bcrumbs.net/bc-api';
import { Box, Heading, Image, Container } from '../../../../atoms';
import VideoSectionWrapper from './style';
import { FeatureBlock } from '../../../../molecules';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
interface VideoLibrarySectionProps {
  sectionHeader: object;
  sectionTitle: object;
  row: object;
  col: object;
  sectionSubTitle: object;
  memberName: object;
  designation: object;
  col1: object;
  col2: object;
  videoTitle: object;
  videoItem: object;
  videoIcon: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const VideoLibrary = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  row,
  col1,
  col2,
  videoItem,
  videoTitle,
  videoIcon,
  model,
  isAR,
  data,
}: VideoLibrarySectionProps) => {
  let initialVideoUrl = '';
  if (model.children && model.children.length > 0) {
    const initialVideo = model.children[0];
    const videoMap: Record<string, string> = initialVideo.data.reduce(function (
      map,
      obj
    ) {
      map[obj.Key] = obj.Value;
      return map;
    },
    {});
    initialVideoUrl = videoMap.videoUrl;
  }
  const [activeVideo, setActiveVideo] = useState(initialVideoUrl);

  const renderVideo = () => (
    <iframe
      title="ReactivePro"
      width="100%"
      height="500px"
      src={activeVideo}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );

  return (
    <VideoSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Heading content={data.title} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          <Box className="col" {...col1}>
            {renderVideo()}
          </Box>
          <Box className="col" {...col2}>
            {model.children?.map((video, index) => {
              const videoMap: Record<string, string> = video.data.reduce(function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <FeatureBlock
                  onClick={() => setActiveVideo(videoMap.videoUrl)}
                  isAR={isAR}
                  key={`feature_point-${index}`}
                  icon={
                    <Image
                      src={videoMap.PreviewImage}
                      alt={videoMap.sectionTitle}
                      {...videoIcon}
                    />
                  }
                  iconPosition="left"
                  title={
                    <Heading
                      content={videoMap.sectionTitle}
                      {...videoTitle}
                      // @ts-ignore TypeScript is complaining
                      style={{ textAlign: isAR ? 'right' : 'left' }}
                    />
                  }
                  wrapperStyle={videoItem}
                  className={`videoItem videoItemHoverEffect${
                    videoMap.videoUrl === activeVideo ? ' active' : ''
                  }`}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </VideoSectionWrapper>
  );
};

// VideoSection default style
VideoLibrary.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    //color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    //color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // main col
  col1: {
    width: [1, 1, 1, 3 / 4, 3 / 4],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  // side col
  col2: {
    width: [1, 1, 1, 1 / 4, 1 / 4],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  // video item default style
  videoItem: {
    padding: '12px 15px',
    display: 'block',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    transition: '0.3s',
  },
  // video title default style
  videoTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // video icon default style
  videoIcon: {
    width: '75px',
    height: '42px',
    m: '0 10px',
  },
};

export default withModelToDataObjProp(VideoLibrary);
