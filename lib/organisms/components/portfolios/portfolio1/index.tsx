import { useState } from 'react';
import { GraphContent } from '@bcrumbs.net/bc-api';
import BlogSectionWrapper from './style';
import { Container, Box, Heading, Button,Text,Image,Link } from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
interface BlogSliderSectionProps {
  row: object;
  sectionHeader: object;
  sectionTitle: object;
  buttonRow: object;
  blogTitle: any;
  blogMeta: object;
  btnStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
  sectionSubTitle: object;
}
const BlogSection = ({
  row,
  buttonRow,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  blogTitle,
  blogMeta,
  btnStyle,
  model,
  isAR,
  data
}: BlogSliderSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  let targetSections;

  if (model.children && model.children.length > 0) {
    targetSections = showAll ? model.children : model.children.slice(0, 6);
  } else {
    targetSections = model.children;
  }

  return (
    <BlogSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.sectionSubTitle} {...sectionSubTitle} />
          <Heading content={data.sectionTitle} {...sectionTitle} />
        </Box>
        <Box
          className="row"
          {...row}
          style={{ flexDirection: isAR ? 'row-reverse' : 'row' }}
        >
          {targetSections.map((blogSection, index) => {
            let blogSectionMap = blogSection.data.reduce(function (map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});
            return (
              <FeatureBlock
                onClick={() => window.open(blogSectionMap.postLink, '_blank')}
                key={`post_key-${index}`}
                id={`post_id-${blogSectionMap.id}`}
                className="blog__post"
                isAR={isAR}
                icon={
                  <Image
                    src={blogSectionMap.thumbnail_url}
                    alt={`Blog Image ${blogSectionMap.id}`}
                    className="blog__image"
                  />
                }
                title={
                  <Link
                    href={blogSectionMap.postLink}
                    {...blogTitle}
                    target="_blank"
                  >
                    {blogSectionMap.title}
                  </Link>
                }
                description={
                  <Text content={blogSectionMap.date} {...blogMeta} />
                }
              />
            );
          })}
        </Box>
        {!showAll && model.children && model.children.length > 6 ? (
          <Box className="row" {...buttonRow}>
            <Button
              {...btnStyle}
              title={data.showAllButton}
              onClick={() => setShowAll(true)}
            />
          </Box>
        ) : null}
      </Container>
    </BlogSectionWrapper>
  );
};

// BlogSection default style
BlogSection.defaultProps = {
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
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
  },
  // Button row
  buttonRow: {
    flexBox: true,
    flexWrap: 'wrap',
    textAlign: 'center',
    ml: '-12px',
    mr: '-12px',
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.020em',
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0,
  },
  // Show more button
  btnStyle: {
    m: '10px auto',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default withModelToDataObjProp(BlogSection);
