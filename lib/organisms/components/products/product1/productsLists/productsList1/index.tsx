import React, { Fragment } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import { Box,Heading,Image, Container } from '../../../../../../atoms';
import SectionWrapper from './style';
import { FeatureBlock } from '../../../../../../molecules';
// import { openModal, closeModal } from '@redq/reuse-modal';
import ProductModal from '../..';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

// Default close button for modal
const CloseModalButton = () => (null
  // <Button
  //   className="foodModalCloseBtn"
  //   variant="fab"
  //   onClick={() => closeModal()}
  //   icon={<i className="flaticon-plus-symbol" />}
  // />
);
interface TabbedProductSectionProps{
  secTitleWrapper:object;
  secHeading:object;
  row:object;
  blogTitle:object;
  blogMeta:object;
  contentStyle:object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const TabbedProductSection = ({
  secTitleWrapper,
  secHeading,
  row,
  blogTitle,
  blogMeta,
  contentStyle,
  model,
  isAR,
  data
}:TabbedProductSectionProps) => {
  const handleProductModal = (imagePath) => {
    // openModal({
    //   config: {
    //     className: 'product-modal',
    //     disableDragging: false,
    //     width: '50%',
    //     height: '100%',
    //     animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
    //     animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
    //     transition: {
    //       mass: 1,
    //       tension: 180,
    //       friction: 26,
    //     },
    //   },
    //   component: ProductModal,
    //   componentProps: {
    //     imagePath,
    //   },
    //   closeComponent: CloseModalButton,
    //   closeOnClickOutside: true,
    // });
  };
  return (
    <SectionWrapper
      id={model.name}
      xlRowCount={data.xlRowCount}
      lgRowCount={data.lgRowCount}
      mdRowCount={data.mdRowCount}
      smRowCount={data.smRowCount}
      xsRowCount={data.xsRowCount}
      xlItemHeight={data.xlItemHeight}
      lgItemHeight={data.lgItemHeight}
      mdItemHeight={data.mdItemHeight}
      smItemHeight={data.smItemHeight}
      xsItemHeight={data.xsItemHeight}
      showTabs={model.children.length > 1}
      marginTop={data.marginTop}
    >
      <Container>
        {data.title ? (
          <Box {...secTitleWrapper}>
            <Heading content={data.title} {...secHeading} />
          </Box>
        ) : null}
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {model.children.filter(m => m.online).map((item, index) => {
            let screenMap = item.data.reduce(function (map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});
            return (
              <TabPane
                tab={
                  <Fragment>
                    {/*(screenMap.icon ? <Icon icon={screenMap.icon} size={24} /> : null)*/}
                    {screenMap.title}
                  </Fragment>
                }
                key={index + 1}
              >
                <Box className="row" {...row}>
                  {item.children &&
                    item.children.map((blogSection, index) => {
                      let postMap = blogSection.data.reduce(function (
                        map,
                        obj
                      ) {
                        map[obj.Key] = obj.Value;
                        return map;
                      },
                      {});
                      return (
                        <FeatureBlock
                          key={`post_key-${index}`}
                          id={`post_id-${postMap.id}`}
                          className="blog__post"
                          icon={
                            <Image
                              src={postMap.image}
                              alt={`Blog Image ${postMap.id}`}
                              className="blog__image"
                            />
                          }
                          contentStyle={contentStyle}
                          title={
                            <Heading content={postMap.title} {...blogTitle} />
                          }
                          onClick={() => handleProductModal(postMap.image)}
                        />
                      );
                    })}
                </Box>
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};


TabbedProductSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%',
  },
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
  },
  // Blog post title default style
  contentStyle: {
    textAlign: 'center',
    mt: '25px',
  },
  blogTitle: {
    fontSize: ['24px', '28px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0,
  },
};

export default withModelToDataObjProp(TabbedProductSection) ;
