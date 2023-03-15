import React from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { SocialProfileWrapper, SocialProfileItem } from './socialProfile.style';

const SocialProfile = ({ items, className, iconSize, model }) => {
  const addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SocialProfileWrapper className={addAllClasses.join(' ')}>
      {model.children &&
        model.children.map((item, index) => {
          let socialLink = item.data.reduce(function (map, obj) {
            map[obj.Key] = obj.Value;
            return map;
          }, {});
          return (
            <SocialProfileItem
              key={`social-item-${index}`}
              className="social_profile_item"
            >
              <Link href={socialLink.url || '#'}>
                <a aria-label="social icon">
                  {/*<Icon
                    icon={socialLink.icon || socialDribbbleOutline}
                    size={iconSize || 22}
                  />*/}
                </a>
              </Link>
            </SocialProfileItem>
          );
        })}
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
