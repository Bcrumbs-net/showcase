import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import BannerWrapper, { DiscountLabel, BannerMask, Hspace } from './style';
import { FeatureBlock } from '../../../../molecules';
import { Button,Box, Text, Heading,Container } from '../../../../atoms';

interface BannerSectionProps {
  row: object;
  col: object;
  title?: object;
  btnStyle?: object;
  description?: object;
  contentStyle?: object;
  discountText?: object;
  discountAmount?: object;
  outlineBtnStyle?: object;
  model: any;
  isAR: boolean;
}
const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  model,
  isAR,
}: BannerSectionProps) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  const ButtonGroup = () => (
    <Fragment>
      {data.primaryBtnText ? (
        <Button
          title={data.primaryBtnText}
          {...btnStyle}
          onClick={() => {
            window.location.href = data.primaryBtnUrl;
          }}
        />
      ) : null}
      {data.secondaryBtnText ? (
        <Button
          title={data.secondaryBtnText}
          variant="textButton"
          onClick={() => {
            window.location.href = data.secondaryBtnUrl;
          }}
          icon={
            isAR ? (
              <i className="flaticon-left-arrow" />
            ) : (
              <i className="flaticon-next" />
            )
          }
          {...outlineBtnStyle}
        />
      ) : null}
    </Fragment>
  );
  return (
    <BannerWrapper
      style={{ backgroundImage: `url(${data.image})` }}
      id={model.name}
    >
      <BannerMask>
        {/* <Particles /> */}
        <Container>
          <Box className="row" {...row}>
            <Box
              className="col"
              {...col}
              style={{
                textAlign: isAR ? 'right' : 'left',
                direction: isAR ? 'rtl' : 'ltr',
              }}
            >
              {data.logo ? <img src={data.logo} alt="" /> : <Hspace />}
              {data.discount && data.discountNote ? (
                <DiscountLabel>
                  <Text content={data.discount} {...discountAmount} />
                  <Text content={data.discountNote} {...discountText} />
                </DiscountLabel>
              ) : null}
              <FeatureBlock
                title={<Heading content={data.title} {...title} />}
                description={<Text content={data.subTitle} {...description} />}
                button={<ButtonGroup />}
                isAR={isAR}
              />
            </Box>
          </Box>
        </Container>
      </BannerMask>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
