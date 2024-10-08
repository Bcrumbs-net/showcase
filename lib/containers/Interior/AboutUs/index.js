import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Image } from '../../../atoms';
import { Heading } from '../../../atoms';
import { Text } from '../../../atoms';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';

import { aboutData } from '../../../data/Interior';

const AboutUs = () => {
  const { thumb_url, title, text, text2 } = aboutData;
  const setTitle = title => {
    return { __html: title };
  };

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image src={thumb_url} alt="Interior Landing by RedQ" />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Text content={text} />
            <Text content={text2} />
            <Link href="#1" className="learn__more-btn">

              <span className="btn_text">VISITE SITE</span>
              <span className="next_arrow"></span>

            </Link>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
