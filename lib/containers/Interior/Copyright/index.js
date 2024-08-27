import React from 'react';
import Link from 'next/link';
import { Text } from '../../../atoms';
import CopyrightWrapper from './copyright.style';

import { socialProfile } from '../../../data/Interior';

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {socialProfile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href="#1">

              <i className={profile.icon} />

            </Link>
          </li>
        ))}
      </ul>
      <Text content="Copyrights 2019 @RedQ Inc" />
    </CopyrightWrapper>
  );
};

export default Copyright;
