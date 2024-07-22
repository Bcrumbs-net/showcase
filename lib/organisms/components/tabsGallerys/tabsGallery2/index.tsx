import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import { Box, Text, Heading, Image, Container } from '../../../../atoms';
import SectionWrapper from './style';
import TiltShape from './tiltShape/index';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, { convertChildrenModelToDataObject, convertDataModelToDataObject } from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface UpdateScreenProps {
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const UpdateScreen = ({ secTitleWrapper, secText, secHeading, data, model, isAR }: UpdateScreenProps) => {
  return (
    <SectionWrapper id={model.name}>
      <TiltShape />
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading {...secHeading} content={data.subTitle} />
        </Box>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {model.children && model.children?.map((item, index) => {
            const screenMap: Record<string, string> = item.data.reduce((obj, i) => {
              obj[i.Key] = i.Value;
              return obj;
            }, {});
            return (
              <TabPane
                forceRender={true}
                tab={
                  <>
                    {/* <Icon icon={screenMap?.icon} size={24} /> */}
                    {screenMap?.title}
                  </>
                }
                key={index + 1}
              >
                <Image src={screenMap?.image} alt={`screenshot-${index + 1}`} />
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};


UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
};

export default withModelToDataObjProp(UpdateScreen);
