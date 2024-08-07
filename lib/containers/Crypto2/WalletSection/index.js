import React from 'react';
//import Text from '../../../components/Text';
import { Text } from '../../../atoms';
import Fade from 'react-reveal/Fade';
//import Heading from '../../../components/Heading';
//import Image from '../../../components/Image';
import { Image } from '../../../atoms';

//import Button from '../../../components/Button';

//import Logo from '../../../atoms/Logo';
import { Button, Container } from "../../../atoms";
import { Heading } from '../../../atoms';
import { FeatureBlock } from '../../../molecules';
import { WalletFeatures } from '../../../data/Crypto2';
import SectionWrapper, { ContentWrapper } from './walletSection.style';
import WalletImg from './images/illustration2.png';
import GraphFeatureImg from './images/graph-feature.png';
import BtnIcon1 from './images/apple.png';
import BtnIcon2 from './images/playstore.png';

const WalletPortal = () => {
  return (
    <SectionWrapper id="wallet">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={WalletImg} alt="Wallet Image" />
          </div>
          <div className="content">
            <Heading content="Our wallet is built for the cryptocurrency  beginner" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit elit sed eiu Lorem ipsum dolor sit ." />
            <div className="walletfeatures">
              <Fade up>
                {WalletFeatures.map((feature, index) => (
                  <FeatureBlock
                    key={`feature_point-${index}`}
                    icon={<img src={feature.icon} />}
                    iconPosition="left"
                    title={<Text content={feature.title} />}
                  />
                ))}
              </Fade>
            </div>
            <div className="btnGroups">
              <Button
                title="APP STORE"
                variant="textButton"
                icon={<img src={BtnIcon1} />}
                iconPosition="left"
                className="appStore"
              />
              <Button
                title="PLAY STORE"
                variant="textButton"
                icon={<img src={BtnIcon2} />}
                iconPosition="left"
                className="playStore"
              />
            </div>
            <Text
              className="windowsAllert"
              content="*Windows app coming soon"
            />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletPortal;
