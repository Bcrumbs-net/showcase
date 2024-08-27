import { GraphContent } from '@bcrumbs.net/bc-api';
import BannerWrapper, { DiscountLabel, BannerMask, Hspace } from './style';
import { FeatureBlock } from '../../../../molecules';
import { Button, Box, Text, Heading, Container } from '../../../../atoms';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import ParticlesComponent from './particles';
import { BannerDataType } from '../../../types/bannerTypes';

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
  model: GraphContent;
  isAR: boolean;
  data: BannerDataType;
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
  data,
}: BannerSectionProps) => {
  const ButtonGroup = () => (
    <>
      {data.ctaLabel ? (
        <Button
          title={data.ctaLabel}
          {...btnStyle}
          onClick={() => {
            if (data.ctaUrl) window.location.href = data.ctaUrl;
          }}
        />
      ) : null}
      {data.secCtaLabel ? (
        <Button
          title={data.secCtaLabel}
          variant="textButton"
          onClick={() => {
            if (data.secCtaBtnUrl) window.location.href = data.secCtaBtnUrl;
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
    </>
  );

  return (
    <BannerWrapper
      style={{ backgroundImage: `url(${data.image})` }}
      id={model.name}
    >
      <BannerMask>
        {data.floatingParticles == true ? <ParticlesComponent /> : null}
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
              {data.discount && data.discountLabel ? (
                <DiscountLabel>
                  <Text content={data.discount} {...discountAmount} />
                  <Text content={data.discountLabel} {...discountText} />
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

export default withModelToDataObjProp(BannerSection);
