
import Link from 'next/link';
import { Heading, Container } from '../../../atoms';
import { BlogPost } from '../../../molecules';
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from './blogSection.style';

const BlogSection = ({ model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let blogsItems = [];
  if (model.children && model.children.length > 0) {
    blogsItems = model.children.map(blogData => {
      let blogMap = blogData.data.reduce(function(map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
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
          {blogsItems.map(item => (
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

export default BlogSection;
