import { useState } from "react";
import Link from "next/link";
import {
  Box,
  RadioGroup,
  InputGroup,
  Text,
  Image,
  Container,
} from "../../../../atoms";
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  DonationForm,
  DonateButton,
} from "./style";
import heartImage from "../../../../assets/image/charity/heart-alt.svg";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";
import { currencyOptions } from "../../../../data/Charity-review";
interface DonateSectionProps {
  row: object;
  col: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const DonateSection = ({ row, col, model, isAR, data }: DonateSectionProps) => {
  let branchItems = [];
  let paymentPolicyItems = [];
  let currencyOptions = [];
  let finalCurrencyOptions = [];
  let flattenedArray = [];
  if (model.children && model.children.length > 0) {
    branchItems = model.children.map((branchData, index) => {
      const branchMap = convertDataModelToDataObject(branchData);
      //paymentPolicyItems mapping data
      paymentPolicyItems = model.children
        .filter((paymentMap) => {
          return paymentMap.modelId === 403127;
        })
        .map((subPaymentData) => {
          const subPaymentMap = convertDataModelToDataObject(subPaymentData);
          return subPaymentMap;
        });

      // currencyOptions mapping data
      currencyOptions = model.children
        .filter((currencyMap) => {
          return currencyMap.modelId === 403128;
        })
        .map((subCurrencyData) => {
          let subCurrencyMap = convertDataModelToDataObject(subCurrencyData);
          return subCurrencyData.children.map((currencyOptionItem) => {
            const subCurrencyOptionItem =
              convertDataModelToDataObject(currencyOptionItem);
            return subCurrencyOptionItem;
          });
        });
      finalCurrencyOptions = currencyOptions.flat(Infinity);
      return branchMap;
    });
  }
  const [state, setState] = useState({
    price: "",
    currency: "usd",
    policy: "oneTime",
  });

  const handleFormData = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleDonation = (e) => {
    e.preventDefault();
    setState({
      ...state,
      price: "",
    });
  };

  return (
    <SectionWrapper id={model.name}>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentArea>
              <Heading>
                {data.heading_1} <span>{data.heading_2}</span> {data.heading_3}
              </Heading>
              <Text content={data.subTitle} />
              <ButtonGroup>
                <Link href="{data.button_1_Url}">
                  <a className="learn__more-btn alt">
                    <span className="hyphen" />
                    <span className="btn_text">{data.button_1_Label}</span>
                  </a>
                </Link>
                <Text content="or" />
                <Link href="{data.button_2_Url}">
                  <a className="learn__more-btn">
                    <span className="hyphen" />
                    <span className="btn_text">{data.button_2_Label}</span>
                  </a>
                </Link>
              </ButtonGroup>
            </ContentArea>
          </Box>
          <Box className="col" {...col}>
            <DonationForm onSubmit={(e) => handleDonation(e)}>
              <InputGroup
                inputType="number"
                placeholder="100.00"
                inputValue={state.price}
                inputOnChange={(e) => handleFormData(e.target.value, "price")}
                currency="$ USD"
                selectedValue={state.currency}
                selectOptions={finalCurrencyOptions}
                selectOnUpdate={(value) => handleFormData(value, "currency")}
              />
              <RadioGroup
                name="radioGroup"
                value={state.policy}
                items={paymentPolicyItems}
                onUpdate={(value) => handleFormData(value, "policy")}
              />
              <DonateButton type="submit">
                {data.Donate_Button_Label}{" "}
                <Image src={heartImage.src} alt="Charity Landing" />
              </DonateButton>
            </DonationForm>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

// DonateSection default style
DonateSection.defaultProps = {
  // DonateSection row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // DonateSection col default style
  col: {
    width: ["100%", "50%", "50%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
};

export default withModelToDataObjProp(DonateSection);
