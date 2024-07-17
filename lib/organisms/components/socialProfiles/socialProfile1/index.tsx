import React from "react";
import Link from "next/link";
import { SocialProfileWrapper, SocialProfileItem } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface SocialProfileProps {
  items: object;
  className: string;
  iconSize: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const SocialProfile = ({
  items,
  className,
  iconSize,
  model,
  data,
  isAR,
}: SocialProfileProps) => {
  const addAllClasses = ["social_profiles"];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SocialProfileWrapper className={addAllClasses.join(" ")}>
      {model.children &&
        model.children.map((item, index) => {
          const socialLink: Record<string, string> = item.data.reduce(function (
            map,
            obj
          ) {
            map[obj.Key] = obj.Value;
            return map;
          },
          {});
          return (
            <SocialProfileItem
              key={`social-item-${index}`}
              className="social_profile_item"
            >
              <Link href={socialLink.url || "#"} aria-label="social icon">

                {/*<Icon
                  icon={socialLink.icon || socialDribbbleOutline}
                  size={iconSize || 22}
                />*/}

              </Link>
            </SocialProfileItem>
          );
        })}
    </SocialProfileWrapper>
  );
};

export default withModelToDataObjProp(SocialProfile);
