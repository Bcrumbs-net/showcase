export type TestimonialDataType = {
    title: string;
    subTitle: string;
    description?: string;
    subdata?: TestimonialDataItemType[];
}

export type TestimonialDataItemType = {
    name?: string;
    title?: string;
    description?: string;  //review and description has description name
    designation?: string;
    comment?: string;
    avatarUrl?: string;
    testimonialUrl?: string;
    thumbnail?: string;
    thumbnailAlt?: string;
    organization?: string;
    organizationURL?: string;
    twitterProfile?: string;
    tweetImage?: string;
    socialIcon?: string;
    subdata?: TestimonialSubDataItemType[];
};

export type TestimonialSubDataItemType = {
    _id?: number;
    name?: string;
    designation?: string;
    description?: string;
}