import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
//import Box from '../../../components/Box';
//import Image from '../../../components/Image';
//import Card from '../../../components/Card';
//import Text from '../../../components/Text';
//import Heading from '../../../components/Heading';
//import Button from '../../../components/Button';
import { FeatureBlock } from '../../../molecules';
//

import { Box, Container } from '../../../atoms';
import { Image } from '../../../atoms';
import { Card } from "../../../atoms";
import { Text } from '../../../atoms';
import { Heading } from '../../../atoms';
import { Button } from "../../../atoms";
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';
import shape1 from './images/Shape-1.png';
import shape2 from './images/Shape-2.png';
import shape3 from './images/Shape-3.png';
import shape4 from './images/Shape-4.png';

const WorkHistory = ({ row, col, cardStyle, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={shape1} alt="Shape 1" />
                <h3>
                  <CountUp start={0} end={75000} />+
                </h3>
                <Text content="Awards" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={shape2} alt="Shape 2" />
                <h3>
                  <CountUp start={0} end={80} duration={5} />
                </h3>
                <Text content="Million Customers" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={shape3} alt="Shape 3" />
                <h3>
                  <CountUp start={0} end={9350} duration={5} />+
                </h3>
                <Text content="Community" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={shape4} alt="Shape 4" />
                <h3>
                  <CountUp start={0} end={30000} duration={5} />+
                </h3>
                <Text content="Transactions" />
              </Card>
            </CounterUpArea>
          </Box>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content="Our Largest Achievements " />}
              description={
                <Text content="We have worked with some leading agencies around the globe and their appreciation is our main strength. In the modern cryptocurrency era, customer satisfaction is our main criteria. " />
              }
              button={
                <Button
                  title="See our stories"
                  variant="textButton"
                  icon={<i className="flaticon-next" />}
                  {...btnStyle}
                />
              }
            />
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
  },

  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
