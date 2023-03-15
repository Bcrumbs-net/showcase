import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../../atoms';
import ProductModalWrapper from './productModal.style';
import 'rc-tabs/assets/index.css';

const ProductModal = ({ imagePath }) => {
  return (
    <ProductModalWrapper>
      <Image className="productImage" src={imagePath} alt="Product Banner" />
    </ProductModalWrapper>
  );
};

// LoginModal style props
ProductModal.propTypes = {
  imagePath: PropTypes.string,
};

// ProductModal default style
ProductModal.defaultProps = {};

export default ProductModal;
