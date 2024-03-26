export type BannerDataType = {
    ctaLabel?: string; // pri_button_label, linkTex, image_button_label, button_1_label,Button_Text should be ctaLabel
    ctaUrl?: string; // pri_button_url, link, button_1_url,Button_Url should be ctaUrl
    ctaDescription?: string; // textAfterLink
    secCtaLabel?: string; // sec_button_label, video_button_label,image_url_label should be secCtaLabel
    secCtaBtnUrl?: string;  // sec_button_url, video_button_url should be secCtaBtnUrl
    image?: string; // AppScreenShot, front_image, video_section_image should be image
    backgroundImage?: string; // back_image should be backgroundImage
    backgroundColor?: string;
    logo?: string;
    discount?: number; // dicsountAmount should be discount
    discountLabel?: string; // discountText, discount_label should be discountNote
    title?: string; // image_header, banner_title ,News_Titleshould be title
    subTitle?: string; // position, banner_subtitle ,News_Text should be subTitle
    description?: string; // message, image_desc,Text, banner_description should be description
    name?: string;
    videoUrl?: string; // video_url should be videoUrl
    jumpToSectionLink?: string; // examples (Scrolldown_Button_SectionId)
    jumpToSectionLabel?: string; // examples (Scrolldown_Button_Text)
    justToSectionOffset?: number; // examples (Scrolldown_Button_Offset)
    floatingParticles?: boolean;
    welcomeMessage?: string; //welcome_message
    fbLabel?:string; //fb__label
    twitterLabel?:string; //twitter_share_label
    heading?:string; //Heading_1
    secHeading?:string; //Heading_2
    subdata?: BannerDataItemType[];
};

export type BannerDataItemType = {
    _id?:string;
    icon?: string;
    thumbUrl?:string;
    url?: string;
};