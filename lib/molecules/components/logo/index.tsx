import { Text, Link, Image } from '../../../atoms';

/* eslint-disable-next-line */
interface LogoProps {
  className?:string;
  logoSrc?: string;
  title: string;
  logoWrapperStyle?: object;
  logoStyle?: object;
  titleStyle?: object;
  withAchor?: boolean;
  anchorProps?: object;
  href?: string;
}

export const Logo = ({
  logoWrapperStyle,
  logoStyle,
  titleStyle,
  withAchor,
  anchorProps,
  logoSrc,
  title,
  href,
  ...props
}: LogoProps) => (
  <Link {...props} {...logoWrapperStyle}>
    {withAchor ? (
      <a href={href} {...anchorProps}>
        {logoSrc ? (
          <Image src={logoSrc} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </a>
    ) : logoSrc ? (
      <Image src={logoSrc} alt={title} {...logoStyle} />
    ) : (
      <Text content={title} {...titleStyle} />
    )}
  </Link>
);

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none',
    },
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap',
  },
};
