// Still I need to continue working on it (banner8, banner4 and banner6)
export type BannerDataType = {
    ctaLabel?: string; // pri_button_label, linkTex, image_button_label, button_1_label should be ctaLabel
    ctaUrl?: string; // pri_button_url, link, button_1_url should be ctaUrl
    secCtaLabel?: string; // sec_button_label, video_button_label should be secCtaLabel
    secCtaBtnUrl?: string;  // sec_button_url, video_button_url should be secCtaBtnUrl
    image?: string; // AppScreenShot, front_image, video_section_image should be image
    backgroundImage?: string; // back_image should be backgroundImage
    backgroundColor?: string;
    logo?: string;
    discount?: number; // dicsountAmount should be discount
    discountLabel?: string; // discountText, discount_label should be discountNote
    title?: string; // image_header, banner_title should be title
    subTitle?: string; // position, banner_subtitle should be subTitle
    description?: string; // message, image_desc, banner_description should be description
    name?: string;
    videoUrl?: string; // video_url should be videoUrl
    jumpToSectionLink?: string; // examples (Scrolldown_Button_SectionId)
    jumpToSectionLabel?: string; // examples (Scrolldown_Button_Text)
    justToSectionOffset?: number; // examples (Scrolldown_Button_Offset)
}