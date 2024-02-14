export type FaqDataType = {
  title?: string; // sectionTitle should be title
  subTitle?: string; // sectionSubTitle should be subTitle
  subdata?: FaqDataItemType[];
};

export type FaqDataItemType = {
  title?: string;
  description?: string;
  expand?: boolean;
};
