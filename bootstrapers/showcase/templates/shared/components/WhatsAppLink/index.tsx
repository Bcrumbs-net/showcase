import React from 'react';
import WhatsAppLinkWrapper from './style';
import whatsAppLogo from '../../../../assets/image/socialMedia/WhatsAppLogo.svg'

const WhatsAppLink = ({
    phoneNumber,
}: {
    phoneNumber?: string;
}) => {
    return (
        <WhatsAppLinkWrapper>
            <a href={`https://wa.me/${phoneNumber}`}>
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
