import { Icon } from 'react-icons-kit';
import { star } from 'react-icons-kit/fa/star';
import { starO } from 'react-icons-kit/fa/starO';

/* eslint-disable-next-line */
export interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        //@ts-ignore: Unreachable code error
        <Icon key={`rating-key${i}`} icon={star} className="star" />
      );
    } else {
      totalRating.push(
        //@ts-ignore: Unreachable code error
        <Icon key={`rating-key${i}`} icon={starO} className="star-o" />
      );
    }
  }

  return <div className="rating">{totalRating}</div>;
};
