import Link from "next/link";
import Fade from "react-reveal/Fade";
import { Text, Tab, Panel, Heading, Image } from "../../../../atoms";
import SectionWrapper, { ContentWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface BranchSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const BranchSection = ({ model, isAR, data }: BranchSectionProps) => {
  const title = (text) => {
    return { __html: text };
  };
  let branchItems = [];
  if (model.children && model.children.length > 0) {
    branchItems = model.children.map((branchData, index) => {
      const branchMap = convertDataModelToDataObject(branchData);
      return branchMap;
    });
  }
  return (
    <SectionWrapper id={model.name}>
      <Tab active={2}>
        {branchItems.map((item) => (
          <Panel
            title={<Text content={item.menuItem} />}
            key={`tab_key${item.id}`}
          >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image src={item.image} alt="Charity Landing" />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text content={item.description} />
                <Link href={item.linkUrl}>
                  <a className="learn__more-btn">
                    <span className="hyphen" />
                    <span className="btn_text">{item.linkText}</span>
                  </a>
                </Link>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};
export default withModelToDataObjProp(BranchSection);
