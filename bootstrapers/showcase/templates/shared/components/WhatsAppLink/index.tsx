import React from 'react';
import WhatsAppLinkWrapper from './style';
import whatsAppLogo from '../../../../assets/image/socialMedia/WhatsAppLogo.png'

const WhatsAppLink = ({
    data,
}: {
    data?: string;
}) => {
    return (
        <WhatsAppLinkWrapper>
            <a href={data}>
                <div>
                    <img
                        src={whatsAppLogo.src}
                    />
                </div>
            </a>
        </WhatsAppLinkWrapper>
    );
};

export default WhatsAppLink;
