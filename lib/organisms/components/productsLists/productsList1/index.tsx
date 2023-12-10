import React from 'react';
import { Image } from '../../../../atoms';
import ProductModalWrapper from './style';
import 'rc-tabs/assets/index.css';

const ProductModal = ({ imagePath }: { imagePath: string }) => {
  return (
    <ProductModalWrapper>
      <Image className="productImage" src={imagePath} alt="Product Banner" />
    </ProductModalWrapper>
  );
};

// ProductModal default style
ProductModal.defaultProps = {};

export default ProductModal;
