import React, { Fragment } from "react";
import Link from "next/link";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import { Box, Text, Heading, Image, Container } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import {
  PortfolioShowcaseWrapper,
  PortfolioShowcaseItem,
  PortfolioLink,
  BuiltWith,
  PortfolioMeta,
  MetaItem,
} from "./style";
import {
  PrevButton,
  NextButton,
} from "../../../../../bootstrapers/showcase/templates/portfolio/globalStyle";
import { PORTFOLIO_SHOWCASE } from "../../../../data/Portfolio/data";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface PortfolioShowcaseProps {
  sectionWrapper: object;
  secTitleWrapper: object;
  secTitle: object;
  secDescription: object;
  portfolioImage: object;
  portfolioDetails: object;
  portfolioDetailsFullWidth: object;
  titleStyle: object;
  detailsStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const PortfolioShowcase = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  portfolioImage,
  portfolioDetails,
  portfolioDetailsFullWidth,
  titleStyle,
  detailsStyle,
  model,
  data,
  isAR,
}: PortfolioShowcaseProps) => {
  //Carousel Options
  const carouselOptions = {
    type: data.children && data.children.length > 1 ? "carousel" : "slider",
    autoplay: data.children && data.children.length > 1 ? 6000 : false,
    perView: 1,
    gap: 28,
    animationDuration: 900,
  };
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.subtitle} />
        </Box>
        <PortfolioShowcaseWrapper>
          <Tabs
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent animated={false} />}
          >
            {model.children &&
              model.children.map((tabItem, index) => {
                const subData: Record<string, string> = tabItem.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <TabPane
                    tab={
                      <Text
                        content={subData.title}
                        data-text={subData.title}
                        as="span"
                      />
                    }
                    key={index + 1}
                  >
                    <GlideCarousel
                      carouselSelector={`${tabItem.name}-carousel-${index + 1}`}
                      options={carouselOptions}
                      prevButton={
                        <PrevButton>
                          <span />
                        </PrevButton>
                      }
                      nextButton={
                        <NextButton>
                          <span />
                        </NextButton>
                      }
                    >
                      <>
                        {tabItem.children &&
                          tabItem.children.map((portfolioItemObj, index) => {
                            const portfolioItem: Record<string, string> =
                              portfolioItemObj.data.reduce(function (map, obj) {
                                map[obj.Key] = obj.Value;
                                return map;
                              }, {});
                            const imageBoxContent = (
                              <Image
                                src={portfolioItem.image}
                                alt={`PortfolioImage-${index + 1}`}
                              />
                            );
                            const textBoxContent = (
                              <Fragment>
                                <Heading
                                  content={portfolioItem.title}
                                  {...titleStyle}
                                />
                                <Text
                                  content={portfolioItem.description}
                                  {...detailsStyle}
                                />
                                {portfolioItem.link ? (
                                  <PortfolioLink>
                                    <a
                                      target="_blank"
                                      href={portfolioItem.link || "#"}
                                      rel="noreferrer"
                                    >
                                      VISIT LINK
                                    </a>
                                  </PortfolioLink>
                                ) : null}
                                {portfolioItem.buildWith ? (
                                  <BuiltWith>
                                    {portfolioItemObj.children &&
                                      portfolioItemObj.children.map(
                                        (itemObj, index) => {
                                          const item: Record<string, string> =
                                            itemObj.data.reduce(function (
                                              map,
                                              obj
                                            ) {
                                              map[obj.Key] = obj.Value;
                                              return map;
                                            },
                                            {});
                                          return (
                                            <span
                                              key={`buildWith-item-${index}`}
                                            >
                                              {item.content}
                                            </span>
                                          );
                                        }
                                      )}
                                  </BuiltWith>
                                ) : (
                                  ""
                                )}
                              </Fragment>
                            );
                            return (
                              <GlideSlide
                                key={`${tabItem.name}-${portfolioItemObj.name}-${index}`}
                              >
                                <PortfolioShowcaseItem>
                                  {portfolioItem.image ? (
                                    <Fragment>
                                      <Box {...portfolioImage}>
                                        {imageBoxContent}
                                      </Box>
                                      <Box {...portfolioDetails}>
                                        {textBoxContent}
                                      </Box>
                                    </Fragment>
                                  ) : (
                                    <Box {...portfolioDetailsFullWidth}>
                                      {textBoxContent}
                                    </Box>
                                  )}
                                  {portfolioItem.featuredIn ||
                                  portfolioItem.view ||
                                  portfolioItem.love ||
                                  portfolioItem.feedback ? (
                                    <PortfolioMeta>
                                      {portfolioItem.featuredIn ? (
                                        <MetaItem className="meta_featured">
                                          FEATURED IN
                                          <Link
                                            href={
                                              portfolioItem.featuredLink || "#"
                                            }
                                          >
                                            <a>{portfolioItem.featuredIn}</a>
                                          </Link>
                                        </MetaItem>
                                      ) : (
                                        ""
                                      )}
                                      {portfolioItem.view ? (
                                        <MetaItem>
                                          <b>{portfolioItem.view}</b> View
                                        </MetaItem>
                                      ) : (
                                        ""
                                      )}
                                      {portfolioItem.love ? (
                                        <MetaItem>
                                          <b>{portfolioItem.love}</b> Love
                                        </MetaItem>
                                      ) : (
                                        ""
                                      )}
                                      {portfolioItem.feedback ? (
                                        <MetaItem>
                                          <b>{portfolioItem.feedback}</b>{" "}
                                          Feedback
                                        </MetaItem>
                                      ) : (
                                        ""
                                      )}
                                    </PortfolioMeta>
                                  ) : (
                                    ""
                                  )}
                                </PortfolioShowcaseItem>
                              </GlideSlide>
                            );
                          })}
                      </>
                    </GlideCarousel>
                  </TabPane>
                );
              })}
          </Tabs>
        </PortfolioShowcaseWrapper>
      </Container>
    </Box>
  );
};

PortfolioShowcase.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "100px", "110px", "150px"],
    pb: ["60px", "80px", "100px", "110px", "150px"],
  },
  secTitleWrapper: {
    width: ["100%", "100%", "60%", "50%", "50%"],
    mb: ["50px", "65px"],
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
  },
  portfolioImage: {
    width: [1, 1, 1 / 2],
  },
  portfolioDetailsFullWidth: {
    width: [1, 1, 1],
    p: ["30px 0 0 0", "40px 0 0 0", "0 0 0 30px", "0 50px", "0 50px"],
  },
  portfolioDetails: {
    width: [1, 1, 1 / 2],
    p: ["30px 0 0 0", "40px 0 0 0", "0 0 0 30px", "0 50px", "0 50px"],
  },
  titleStyle: {
    fontSize: ["22px", "22px", "26px", "40px", "40px"],
    fontWeight: "600",
    color: "#302b4e",
    mb: "17px",
  },
  detailsStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "justify",
  },
};

export default withModelToDataObjProp(PortfolioShowcase);
