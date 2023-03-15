import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Image, Container, Button } from '../../../atoms';

import { CLIENTS } from '../../../data/Portfolio/data';
import { ClientsImage } from './clients.style';

const ClientsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.subtitle} />
        </Box>
        <Box {...row}>
          {model.children &&
            model.children.map((clientModel, index) => {
              let client = clientModel.data.reduce(function(map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <ClientsImage key={`${model.name}-client-${index}`}>
                  <Image
                    src={client.image}
                    alt={client.title}
                    title={client.title}
                  />
                </ClientsImage>
              );
            })}
        </Box>
      </Container>
    </Box>
  );
};

ClientsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
};

ClientsSection.defaultProps = {
  sectionWrapper: {
    pt: ['40px', '60px', '70px', '70px', '70px'],
    pb: '40px',
  },
  secTitleWrapper: {
    mb: '30px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ClientsSection;
