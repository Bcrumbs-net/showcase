import React from 'react';
import BCLinkWrapper from './bclink.style';

const BCLink = () => {
  return (
    <BCLinkWrapper>
      <a href="https://bcrumbs.net">
        <div>
          Powered by{' '}
          <img
            src="https://cdn.dconfig.com/globalresources/1132/Resources/logo/BC Small icon.png"
            width="16"
            height="16"
            alt="BC"
          />
        </div>
      </a>
    </BCLinkWrapper>
  );
};

export default BCLink;
