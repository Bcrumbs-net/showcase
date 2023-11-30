import React from "react";
import { Image } from "../../../../atoms";
import ProductModalWrapper from "./style";
import "rc-tabs/assets/index.css";
import { Modal } from "@redq/reuse-modal";

const ProductModal = ({ imagePath }) => {
  return (
    <>
    <Modal>
      <ProductModalWrapper>
        <Image className="productImage" src={imagePath} alt="Product Banner" />
      </ProductModalWrapper>
    </Modal>
    </>
  );
};

// ProductModal default style
ProductModal.defaultProps = {};

export default ProductModal;
