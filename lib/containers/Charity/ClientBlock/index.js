import React from 'react';
import { Logo } from '../../../atoms';
import SectionWrapper, { ImageSlider, ImageSlide } from './clientBlock.style';

const ClientBlock = ({ model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let clientItems = [];
  if (model.children && model.children.length > 0) {
    clientItems = model.children.map(clientData => {
      let clientMap = clientData.data.reduce(function(map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return clientMap;
    });
  }
  return (
    <SectionWrapper id={model.name}>
      <ImageSlider>
        <ImageSlide>
          {clientItems.map(item => (
            <Logo
              key={`slide1__key${item.id}`}
              href={item.link}
              logoSrc={item.logo}
              title={item.name}
            />
          ))}
        </ImageSlide>
        <ImageSlide>
          {clientItems.map(item => (
            <Logo
              key={`slide2__key${item.id}`}
              href={item.link}
              logoSrc={item.logo}
              title={item.name}
            />
          ))}
        </ImageSlide>
      </ImageSlider>
    </SectionWrapper>
  );
};

export default ClientBlock;
