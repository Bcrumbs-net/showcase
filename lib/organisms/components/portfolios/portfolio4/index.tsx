import Link from "next/link";
import { Heading, Container } from "../../../../atoms";
import { BlogPost } from "../../../../molecules";
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface BlogSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const BlogSection = ({ model, isAR, data }: BlogSectionProps) => {
  let blogsItems = [];
  if (model.children && model.children.length > 0) {
    blogsItems = model.children.map((blogData) => {
      const blogMap = convertDataModelToDataObject(blogData);
      return blogMap;
    });
  }
  return (
    <SectionWrapper id={model.name}>
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content={data.title} />
            <Text>
              {data.subtitle}
              <Link href={data.subtitle_url}>
                <a className="link">{data.subtitle_label}</a>
              </Link>
            </Text>
          </TitleArea>
          <LinkArea>
            <Link href={data.viewAll_url}>
              <a className="text__btn">
                <span className="text">{data.viewAll_label}</span>
                <span className="arrow" />
              </a>
            </Link>
          </LinkArea>
        </SectionHeader>
        <PostArea>
          {blogsItems.map((item) => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.image}
              title={item.title}
              excerpt={item.subTitle}
              link={
                <a className="learn__more-btn" href={item.learnMoreUrl}>
                  <span className="hyphen"></span>
                  <span className="btn_text">{item.learnMoreLabel}</span>
                </a>
              }
            />
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default withModelToDataObjProp(BlogSection);
